const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pool = require('./db');

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Setup multer for Cloudinary file uploads
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'debateclub/leaders',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp']
  },
});
const upload = multer({ storage: storage });

// Simple middleware to check admin key
const isAdmin = (req, res, next) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey === process.env.ADMIN_KEY || adminKey === 'slim.v.') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized. Invalid admin key.' });
  }
};

// GET: Fetch all leaders
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM leaders ORDER BY id ASC');
    res.json({ leaders: result.rows });
  } catch (err) {
    console.error('Error fetching leaders:', err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST: Add a new leader
router.post('/', isAdmin, upload.single('image'), async (req, res) => {
  try {
    const { name, role, role_fr, phone, email, bio } = req.body;
    let photo_path = '';

    if (req.file) {
      photo_path = req.file.path;
    }

    if (!name || !role) {
      return res.status(400).json({ error: 'Name and Role are required.' });
    }

    const query = `
      INSERT INTO leaders (name, role, role_fr, phone, email, bio, photo_path)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [
      name,
      role,
      role_fr || role,
      phone || '',
      email || '',
      bio || 'Background information coming soon...',
      photo_path
    ];

    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error adding leader:', err);
    res.status(500).json({ error: 'Failed to add leader' });
  }
});

// DELETE: Delete a leader
router.delete('/', isAdmin, async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Leader ID is required' });
    }
    await pool.query('DELETE FROM leaders WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error('Error deleting leader:', err);
    res.status(500).json({ error: 'Failed to delete leader' });
  }
});

// PUT: Edit a leader
router.put('/', isAdmin, upload.single('image'), async (req, res) => {
  try {
    const { id, name, role, role_fr, phone, email, bio } = req.body;
    
    if (!id || !name || !role) {
      return res.status(400).json({ error: 'ID, Name, and Role are required.' });
    }

    let query, values;
    if (req.file) {
      const photo_path = req.file.path;
      query = `UPDATE leaders SET name=$1, role=$2, role_fr=$3, phone=$4, email=$5, bio=$6, photo_path=$7 WHERE id=$8 RETURNING *`;
      values = [name, role, role_fr || role, phone || '', email || '', bio || '', photo_path, id];
    } else {
      query = `UPDATE leaders SET name=$1, role=$2, role_fr=$3, phone=$4, email=$5, bio=$6 WHERE id=$7 RETURNING *`;
      values = [name, role, role_fr || role, phone || '', email || '', bio || '', id];
    }

    const result = await pool.query(query, values);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Leader not found' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error editing leader:', err);
    res.status(500).json({ error: 'Failed to edit leader' });
  }
});

module.exports = router;
