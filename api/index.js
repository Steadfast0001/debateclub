const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const host = "127.0.0.1";

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.all('/api/register', require('./register'));
app.all('/api/news', require('./news'));
app.all('/api/stats', require('./stats'));
app.all('/api/visit', require('./visit'));
app.all('/api/gallery', require('./gallery'));
app.all('/api/admin/registrations', require('./admin/registrations'));
app.use('/api/leaders', require('./leaders'));

// Serve static HTML files without requiring .html extension (optional but nice)
app.use(express.static(path.join(__dirname, '..'), { extensions: ['html'] }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Legacy direct registration link
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

// Fallback for static files
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// For local development, start the server
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, host, () => {
    console.log(`BIAKA Debate Club website running at http://${host}:${port}`);
    console.log(`Direct registration link: http://${host}:${port}/register`);
  });
}

// Export for Vercel Serverless Functions
module.exports = app;
