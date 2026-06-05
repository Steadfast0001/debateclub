const pool = require('./api/db');

(async () => {
  try {
    await pool.query(
      `UPDATE leaders SET name = $1 WHERE role = 'Vice President'`,
      ['MBU CHRISTELLE']
    );
    console.log('VP updated successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
})();
