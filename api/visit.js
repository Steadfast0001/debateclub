const fs = require('fs');
const path = require('path');

const statsFile = path.join(__dirname, '..', 'stats.json');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      let stats = { leaders: 4, activities: 12, campus: 'BUIB', visits: 0 };
      if (fs.existsSync(statsFile)) {
        stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
      }
      
      stats.visits = (stats.visits || 0) + 1;
      fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));
      
      return res.status(200).json({ success: true, visits: stats.visits });
    } catch (err) {
      console.error('Error tracking visit:', err);
      return res.status(500).json({ error: 'Failed to track visit' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
