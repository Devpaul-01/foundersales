const supabase = require('../config/database');
const emailQueue = require('../services/queueService');

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
          signup_source: 'email'
        })
        .select()
        .single();

      if (error) throw error;

      // Get position (count of signups before this one)
      const { count } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      const position = count;

      // Queue welcome email (async)
      emailQueue.add({
        to: email,
        position
      });
      
      console.log("Added to queuw");

      res.status(201).json({
        success: true,
        message: "You're on the list! Check your email.",
        position
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