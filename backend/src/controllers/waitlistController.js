const supabase = require('../config/database');
const emailService = require('../services/emailService');

class WaitlistController {
  // Email signup (SIMPLIFIED - no business_description)
  async signup(req, res, next) {
    console.log("Signup function called");
    try {
      const { email } = req.body;

      // Check if email already exists
      const { data: existing } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single();

      if (existing) {
        return res.status(409).json({
          error: true,
          message: 'Email already registered'
        });
      }

      // Insert into waitlist
      const { data, error } = await supabase
        .from('waitlist')
        .insert({
          email,
          signup_source: 'email',
          email_sent: false  // explicitly mark as not sent yet
        })
        .select()
        .single();

      if (error) throw error;

      // Get position (total count)
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      const position = count;

      res.status(201).json({
        success: true,
        message: "You're on the list! Check your email.",
        position
      });
    } catch (error) {
      next(error);
    }
  }

  // Manually trigger sending welcome emails to all users who haven't received one yet
  // Protected by requireAdmin middleware in the route
  async sendPendingEmails(req, res, next) {
    try {
      // Fetch all users where email_sent is false or null
      const { data: pending, error: fetchError } = await supabase
        .from('waitlist')
        .select('id, email, created_at')
        .or('email_sent.is.null,email_sent.eq.false')
        .order('created_at', { ascending: true });

      if (fetchError) throw fetchError;

      if (!pending || pending.length === 0) {
        return res.json({
          success: true,
          message: 'No pending emails to send.',
          sent: 0,
          failed: 0
        });
      }

      // Get total count once (used for position calculation)
      const { count: totalCount } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      const results = { sent: [], failed: [] };

      for (const user of pending) {
        try {
          // Calculate their approximate position based on signup order
          const { count: position } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true })
            .lte('created_at', user.created_at);

          await emailService.sendWelcomeEmail(user.email, position);

          // Mark as sent
          const { error: updateError } = await supabase
            .from('waitlist')
            .update({ email_sent: true })
            .eq('id', user.id);

          if (updateError) {
            console.error(`Failed to mark email_sent for ${user.email}:`, updateError);
          }

          results.sent.push(user.email);
          console.log(`✅ Email sent to ${user.email}`);
        } catch (emailError) {
          console.error(`❌ Failed to send email to ${user.email}:`, emailError.message);
          results.failed.push({ email: user.email, reason: emailError.message });
        }
      }

      res.json({
        success: true,
        message: `Done. ${results.sent.length} sent, ${results.failed.length} failed.`,
        sent: results.sent.length,
        failed: results.failed.length,
        failedDetails: results.failed
      });
    } catch (error) {
      next(error);
    }
  }

  // Get recent signups (for live feed)
  async getRecentSignups(req, res, next) {
    try {
      const limit = parseInt(req.query.limit) || 20;

      const { data, error } = await supabase
        .from('waitlist')
        .select('email, created_at')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      // Mask emails for privacy
      const signups = data.map(signup => ({
        email: maskEmail(signup.email),
        created_at: signup.created_at,
        time_ago: getTimeAgo(new Date(signup.created_at))
      }));

      res.json({
        success: true,
        signups
      });
    } catch (error) {
      next(error);
    }
  }

  // Get total count
  async getCount(req, res, next) {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;

      res.json({
        success: true,
        count
      });
    } catch (error) {
      next(error);
    }
  }
}

// Helper: Mask email for privacy
function maskEmail(email) {
  const [name, domain] = email.split('@');
  const maskedName = name.substring(0, 2) + '*'.repeat(Math.max(name.length - 2, 1));
  const [domainName, tld] = domain.split('.');
  const maskedDomain = domainName.substring(0, 2) + '*'.repeat(Math.max(domainName.length - 2, 1));
  return `${maskedName}@${maskedDomain}.${tld}`;
}

// Helper: Get time ago
function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  if (seconds < 60) return `${seconds} sec ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hr ago`;
  return `${Math.floor(seconds / 86400)} days ago`;
}

module.exports = new WaitlistController();
    
