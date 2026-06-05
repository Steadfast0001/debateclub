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
      const pool = require('./db');
      const result = await pool.query('UPDATE app_stats SET visits = visits + 1 RETURNING visits');
      
      let visits = 1;
      if (result.rows.length > 0) {
        visits = result.rows[0].visits;
      }
      
      return res.status(200).json({ success: true, visits });
    } catch (err) {
      console.error('Error tracking visit:', err);
      return res.status(500).json({ error: 'Failed to track visit' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
