require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;
const host = "127.0.0.1";

// Middleware
app.use(helmet({
  contentSecurityPolicy: false // Disabled to avoid breaking inline scripts/styles and external images
}));
app.use(compression());
app.use(cors());
app.use(express.json());

// API routes
app.all('/api/register', require('./routes/register'));
app.all('/api/news', require('./routes/news'));
app.all('/api/stats', require('./routes/stats'));
app.all('/api/visit', require('./routes/visit'));
app.all('/api/gallery', require('./routes/gallery'));
app.all('/api/admin/registrations', require('./routes/admin/registrations'));
app.all('/api/admin/login', require('./routes/admin/auth'));
app.all('/api/admin/forgot-password', require('./routes/admin/auth'));
app.all('/api/admin/reset-password', require('./routes/admin/auth'));
app.all('/api/admin/verify', require('./routes/admin/auth'));
app.use('/api/leaders', require('./routes/leaders'));
app.all('/api/contact', require('./routes/contact'));

const sendHtml = (res, fileName) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.join(__dirname, 'public', fileName));
};

// Serve static HTML files without requiring .html extension
app.use(express.static(path.join(__dirname, 'public'), { 
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), { 
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0 
}));

// Direct page links
app.get('/', (req, res) => sendHtml(res, 'index.html'));
app.get('/index', (req, res) => sendHtml(res, 'index.html'));
app.get('/bp-hub', (req, res) => sendHtml(res, 'bp-hub.html'));
app.get('/bp', (req, res) => sendHtml(res, 'bp-hub.html'));
app.get('/bp-suite', (req, res) => sendHtml(res, 'bp-hub.html'));
app.get('/register', (req, res) => sendHtml(res, 'register.html'));
app.get('/contact', (req, res) => sendHtml(res, 'contact.html'));
app.get('/news', (req, res) => sendHtml(res, 'news.html'));
app.get('/admin', (req, res) => sendHtml(res, 'admin.html'));

// Fallback for static files
app.use((req, res) => {
  sendHtml(res, 'index.html');
});

// For local development, start the server
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, host, () => {
    console.log(`BIAKA Audacious Agora Debate Club website running at http://${host}:${port}`);
    console.log(`Direct registration link: http://${host}:${port}/register`);
  });
}

// Export for Vercel Serverless Functions
module.exports = app;
