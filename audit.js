const pool = require('./api/db');
(async () => {
  const leaders = (await pool.query('SELECT * FROM leaders')).rows;
  const news = (await pool.query('SELECT COUNT(*) FROM news_posts')).rows[0].count;
  const gallery = (await pool.query('SELECT COUNT(*) FROM gallery_images')).rows[0].count;
  const registrations = (await pool.query('SELECT COUNT(*) FROM registrations')).rows[0].count;
  
  console.log('=== LEADERS ===');
  leaders.forEach(l => {
    let missing = [];
    if (!l.bio || l.bio === 'Background information coming soon...') missing.push('Bio');
    if (!l.photo_path || l.photo_path.includes('unsplash.com')) missing.push('Actual Photo');
    if (!l.phone) missing.push('Phone');
    if (!l.email) missing.push('Email');
    console.log(`${l.role} (${l.name}): ${missing.length ? 'Needs ' + missing.join(', ') : 'Complete!'}`);
  });
  
  console.log('\n=== OTHER DATA ===');
  console.log(`News Posts: ${news}`);
  console.log(`Gallery Images: ${gallery}`);
  console.log(`Registrations: ${registrations}`);
  process.exit();
})();
