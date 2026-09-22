const pool = require('./routes/db');

async function updateMentor() {
  try {
    const res = await pool.query(
      `UPDATE leaders 
       SET phone = $1, email = $2, photo_path = $3, role = $4, role_fr = $5
       WHERE LOWER(name) LIKE $6 
       RETURNING *`,
      [
        '+237 675 405 498',
        'nemkul@biakahc.org',
        'images/director.jpg',
        'Director of Academic Affairs / Club Mentor & Adviser',
        'Directeur des Affaires Académiques / Mentor et Conseiller',
        '%nemkul%'
      ]
    );
    console.log('Successfully updated Dr. Nemkul Samuel:', res.rows[0]);
  } catch (err) {
    console.error('Error updating mentor:', err);
  } finally {
    process.exit(0);
  }
}

updateMentor();
