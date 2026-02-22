const { getSupabase } = require('../lib/supabase');

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
    const supabase = getSupabase();

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;

    return res.status(200).json({
      success: true,
      count: count || 0
    });

  } catch (error) {
    console.error('Count error:', error);
    return res.status(500).json({
      error: true,
      message: 'Failed to get count'
    });
  }
};