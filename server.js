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
app.use('/api/leaders', require('./routes/leaders'));
app.all('/api/contact', require('./routes/contact'));

// Serve static HTML files without requiring .html extension with 1-day cache
app.use(express.static(path.join(__dirname, 'public'), { 
  extensions: ['html'],
  maxAge: '1d' 
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), { maxAge: '1d' }));

// Legacy direct registration link
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Fallback for static files
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
