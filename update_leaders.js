const pool = require('./api/db');

(async () => {
  try {
    // Update President
    await pool.query(
      `UPDATE leaders SET name = $1, phone = $2, email = $3, photo_path = $4 WHERE role = 'President'`,
      ['TERCY WAINWUL', '+237 650 141 680', 'tercywainwul@gmail.com', 'images/president.jpg']
    );
    
    // Update PRO
    await pool.query(
      `UPDATE leaders SET name = $1 WHERE role = 'Public Relations Officer'`,
      ['YAYA TOM-PRECIOUS EKONGMANDEM']
    );

    console.log('Database updated successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
})();
