const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('./db');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
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

  // Admin auth check for POST and DELETE
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== process.env.ADMIN_KEY) {
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

      const filePath = '/uploads/' + req.file.filename;
      try {
        const result = await pool.query(
          'INSERT INTO gallery_images (file_path) VALUES ($1) RETURNING *',
          [filePath]
        );
        return res.status(201).json({ success: true, image: result.rows[0] });
      } catch(e) {
        console.error(e);
        return res.status(500).json({ error: 'Database error while saving image' });
      }
    });
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: 'Image ID is required' });
    try {
      const result = await pool.query('DELETE FROM gallery_images WHERE id = $1 RETURNING file_path', [id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Image not found' });
      }
      
      const filePath = path.join(__dirname, '..', result.rows[0].file_path);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
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
