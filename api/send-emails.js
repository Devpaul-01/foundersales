const supabase = require('./backend/src/config/database');
const emailService = require('./backend/src/services/emailService');

module.exports = async (req, res) => {
  try {
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

    const results = { sent: [], failed: [] };

    for (const user of pending) {
      try {
        const { count: position } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true })
          .lte('created_at', user.created_at);

        await emailService.sendWelcomeEmail(user.email, position);

        await supabase
          .from('waitlist')
          .update({ email_sent: true })
          .eq('id', user.id);

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
    console.error('Send pending emails error:', error);
    res.status(500).json({ error: true, message: error.message });
  }
};
