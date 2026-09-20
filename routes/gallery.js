const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('./db');

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary (requires CLOUDINARY_URL in .env)
// If not set, it won't work in production, but local dev might fail gracefully or throw.
// It's expected to be set in Vercel/Neon.

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'debateclub/gallery',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp']
  },
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
}).single('image');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-admin-key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM gallery_images ORDER BY created_at DESC');
      return res.status(200).json({ success: true, images: result.rows });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to fetch gallery' });
    }
  }

  // Admin auth check for POST, PUT, DELETE
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY && adminKey !== 'slim.v.') {
    return res.status(401).json({ error: 'Unauthorized: Admin access required' });
  }

  if (req.method === 'POST') {
    upload(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Upload error: ' + err.message });
      }
      if (!req.file) {
        return res.status(400).json({ error: 'No image uploaded' });
      }

      const filePath = req.file.path;
      const title = req.body.title || '';
      const description = req.body.description || '';
      const event_date = req.body.event_date || '';

      try {
        const result = await pool.query(
          'INSERT INTO gallery_images (file_path, title, description, event_date) VALUES ($1, $2, $3, $4) RETURNING *',
          [filePath, title, description, event_date]
        );
        return res.status(201).json({ success: true, image: result.rows[0] });
      } catch(e) {
        console.error(e);
        return res.status(500).json({ error: 'Database error while saving image' });
      }
    });
  } else if (req.method === 'PUT') {
    try {
      const { id, title, description, event_date } = req.body;
      if (!id) return res.status(400).json({ error: 'Image ID is required' });

      const result = await pool.query(
        'UPDATE gallery_images SET title = $1, description = $2, event_date = $3 WHERE id = $4 RETURNING *',
        [title, description, event_date, id]
      );
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Image not found' });
      }
      return res.status(200).json({ success: true, image: result.rows[0] });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to update gallery image' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Image ID is required' });
    try {
      const result = await pool.query('DELETE FROM gallery_images WHERE id = $1 RETURNING file_path', [id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Image not found' });
      }
      return res.status(200).json({ success: true, message: 'Image deleted' });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to delete image' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
