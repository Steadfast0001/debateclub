// API route for news posts
// GET: Get all published news posts (public)
// POST: Create news post (admin-only)

const pool = require('./db');

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      // Get all news posts (public endpoint)
      const result = await pool.query(
        `SELECT id, title, type, media, text, created_at 
         FROM news_posts 
         ORDER BY created_at DESC`
      );
      
      return res.status(200).json({ success: true, news: result.rows });
    }

    if (req.method === 'POST') {
      // Admin-only: Create news post
      const adminKey = req.headers['x-admin-key'];
      if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Admin access required' });
      }

      const { title, type, media, text } = req.body;

      if (!title || !type || !text) {
        return res.status(400).json({ error: 'Title, type, and text are required' });
      }

      const result = await pool.query(
        `INSERT INTO news_posts (title, type, media, text, author_id)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [title, type, media || null, text, 1] // author_id 1 for now
      );

      const newPost = result.rows[0];

      // Broadcast to all registered members
      const emailResult = await pool.query('SELECT email FROM registrations WHERE email IS NOT NULL');
      const emails = emailResult.rows.map(row => row.email);
      
      const { broadcastNewsUpdate } = require('./email');
      await broadcastNewsUpdate(newPost, emails);

      return res.status(201).json({ 
        success: true, 
        message: 'News post created successfully',
        post: newPost
      });
    }

    if (req.method === 'PUT') {
      // Admin-only: Update news post
      const adminKey = req.headers['x-admin-key'];
      if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Admin access required' });
      }

      const { id, title, type, media, text } = req.body;

      if (!id || !title || !type || !text) {
        return res.status(400).json({ error: 'ID, title, type, and text are required' });
      }

      const result = await pool.query(
        `UPDATE news_posts 
         SET title = $1, type = $2, media = $3, text = $4
         WHERE id = $5
         RETURNING *`,
        [title, type, media || null, text, id]
      );

      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'News post not found' });
      }

      return res.status(200).json({ 
        success: true, 
        message: 'News post updated successfully',
        post: result.rows[0]
      });
    }

    if (req.method === 'DELETE') {
      // Admin-only: Delete news post
      const adminKey = req.headers['x-admin-key'];
      if (adminKey !== process.env.ADMIN_KEY) {
        return res.status(401).json({ error: 'Unauthorized: Admin access required' });
      }

      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'News post ID is required' });
      }

      const result = await pool.query('DELETE FROM news_posts WHERE id = $1 RETURNING id', [id]);
      
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'News post not found' });
      }

      return res.status(200).json({ success: true, message: 'News post deleted successfully' });
    }

    res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('News API error:', error);
    res.status(500).json({ error: 'Failed to process news request' });
  }
};
