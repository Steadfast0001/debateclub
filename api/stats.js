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
      if (fs.existsSync(statsFile)) {
        const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
        return res.status(200).json(stats);
      } else {
        return res.status(200).json({ leaders: 4, activities: 12, campus: 'BUIB', visits: 0 });
      }
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
