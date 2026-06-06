const pool = require('./routes/db');

async function optimize() {
  try {
    console.log('Optimizing PostgreSQL Database via Neon...');
    
    // Add indices on created_at for sorting efficiency
    await pool.query('CREATE INDEX IF NOT EXISTS idx_news_posts_created_at ON news_posts(created_at DESC)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_gallery_images_created_at ON gallery_images(created_at DESC)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_leaders_created_at ON leaders(created_at DESC)');
    await pool.query('CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC)');
    
    // Add index on type for news_posts filtering
    await pool.query('CREATE INDEX IF NOT EXISTS idx_news_posts_type ON news_posts(type)');
    
    console.log('Successfully optimized database! All indices created.');
    process.exit(0);
  } catch (err) {
    console.error('Failed to optimize database:', err);
    process.exit(1);
  }
}

optimize();
