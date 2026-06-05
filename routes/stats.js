const fs = require('fs');
const path = require('path');

const statsFile = path.join(__dirname, '..', 'stats.json');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-key');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const pool = require('./db');
      
      // Get DB counts
      const newsResult = await pool.query('SELECT COUNT(*) FROM news_posts');
      const regResult = await pool.query('SELECT COUNT(*) FROM registrations');
      const leadersResult = await pool.query('SELECT COUNT(*) FROM leaders');
      const statsResult = await pool.query('SELECT campus, visits FROM app_stats LIMIT 1');
      
      const activitiesCount = parseInt(newsResult.rows[0].count);
      const membersCount = parseInt(regResult.rows[0].count);
      const leadersCount = parseInt(leadersResult.rows[0].count);
      
      const appStats = statsResult.rows[0] || { campus: 'BUIB', visits: 0 };

      const stats = {
        leaders: leadersCount || 4,
        activities: activitiesCount,
        members: membersCount,
        campus: appStats.campus,
        visits: appStats.visits
      };

      return res.status(200).json(stats);
    } catch (err) {
      console.error('Error reading stats:', err);
      return res.status(500).json({ error: 'Failed to read stats' });
    }
  }

  if (req.method === 'POST') {
    const adminKey = req.headers['x-admin-key'];
    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized: Admin access required' });
    }

    try {
      const { campus } = req.body;
      const pool = require('./db');
      
      if (campus) {
        await pool.query('UPDATE app_stats SET campus = $1', [campus]);
      }
      
      return res.status(200).json({ success: true, message: 'Stats updated successfully' });
    } catch (err) {
      console.error('Error saving stats:', err);
      return res.status(500).json({ error: 'Failed to save stats' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
