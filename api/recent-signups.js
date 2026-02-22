const { getSupabase } = require('../lib/supabase');
const { maskEmail, getTimeAgo } = require('../lib/validation');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: true, message: 'Method not allowed' });
  }

  try {
    const limit = parseInt(req.query.limit) || 20;
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from('waitlist')
      .select('email, created_at')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;

    const signups = data.map(signup => ({
      email: maskEmail(signup.email),
      created_at: signup.created_at,
      time_ago: getTimeAgo(new Date(signup.created_at))
    }));

    return res.status(200).json({
      success: true,
      signups
    });

  } catch (error) {
    console.error('Recent signups error:', error);
    return res.status(500).json({
      error: true,
      message: 'Failed to get signups'
    });
  }
};