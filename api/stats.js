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
      
      const activitiesCount = parseInt(newsResult.rows[0].count);
      const membersCount = parseInt(regResult.rows[0].count);

      // Read JSON for legacy/manual stats (leaders, campus, visits)
      let stats = { leaders: 4, campus: 'BUIB', visits: 0 };
      if (fs.existsSync(statsFile)) {
        stats = { ...stats, ...JSON.parse(fs.readFileSync(statsFile, 'utf8')) };
      }

      // Override activities and add members count
      stats.activities = activitiesCount;
      stats.members = membersCount;

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
      const { leaders, activities, campus } = req.body;
      let visits = 0;
      if (fs.existsSync(statsFile)) {
        visits = JSON.parse(fs.readFileSync(statsFile, 'utf8')).visits || 0;
      }
      const stats = {
        leaders: leaders || 4,
        activities: activities || 12,
        campus: campus || 'BUIB',
        visits
      };
      fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
      return res.status(200).json({ success: true, stats });
    } catch (err) {
      console.error('Error saving stats:', err);
      return res.status(500).json({ error: 'Failed to save stats' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
