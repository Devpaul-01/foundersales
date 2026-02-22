const { getSupabase } = require('../lib/supabase');
const { sendWelcomeEmail } = require('../lib/email');
const { isValidEmail } = require('../lib/validation');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: true, message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        error: true,
        message: 'Invalid email address'
      });
    }

    const supabase = getSupabase();

    // Check if email exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      return res.status(409).json({
        error: true,
        message: 'Email already registered'
      });
    }

    // Insert new signup
    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        email: email.toLowerCase(),
        signup_source: 'email'
      })
      .select()
      .single();

    if (error) throw error;

    // Get position
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    const position = count || 1;

    // Send email (don't wait for it)
    sendWelcomeEmail(email, position).catch(err => {
      console.error('Email send failed:', err);
    });

    // Update email_sent flag after attempting
    supabase
      .from('waitlist')
      .update({ email_sent: true, email_sent_at: new Date().toISOString() })
      .eq('email', email.toLowerCase())
      .then(() => console.log('Email flag updated'))
      .catch(err => console.error('Flag update failed:', err));

    return res.status(201).json({
      success: true,
      message: "You're on the list! Check your email.",
      position
    });

  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({
      error: true,
      message: 'Something went wrong. Please try again.'
    });
  }
};