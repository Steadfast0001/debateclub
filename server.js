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
app.all('/api/register', require('./api/register'));
app.all('/api/news', require('./api/news'));
app.all('/api/stats', require('./api/stats'));
app.all('/api/visit', require('./api/visit'));
app.all('/api/gallery', require('./api/gallery'));
app.all('/api/admin/registrations', require('./api/admin/registrations'));
app.use('/api/leaders', require('./api/leaders'));

// Serve static HTML files without requiring .html extension (optional but nice)
app.use(express.static(__dirname, { extensions: ['html'] }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Legacy direct registration link
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

// Fallback for static files
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, host, () => {
  console.log(`BIAKA Debate Club website running at http://${host}:${port}`);
  console.log(`Direct registration link: http://${host}:${port}/register`);
});
