const pool = require('./routes/db');

async function addMentor() {
  try {
    const check = await pool.query('SELECT * FROM leaders WHERE LOWER(name) LIKE $1', ['%nemkul%']);
    if (check.rows.length === 0) {
      const res = await pool.query(
        `INSERT INTO leaders (name, role, role_fr, phone, email, photo_path, bio) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         RETURNING *`,
        [
          'DR. NEMKUL SAMUEL',
          'Director of Academic Affairs / Club Mentor & Adviser',
          'Directeur des Affaires Académiques / Mentor et Conseiller',
          '+237 671 710 796',
          'academics@biakahc.org',
          'images/director.jpg',
          '<p><strong>Doctor Nemkul Samuel</strong> is the Director of Academic Affairs at BIAKA University Institute of Buea (BUIB), serving as the principal Mentor and Academic Patron behind the BIAKA Audacious Agora Debate Club. He provides academic guidance, institutional leadership, and strategic mentorship to empower student debaters and leaders across campus and national competitions.</p>'
        ]
      );
      console.log('Inserted Mentor Dr. Nemkul Samuel:', res.rows[0]);
    } else {
      console.log('Mentor already exists:', check.rows[0]);
    }
  } catch (err) {
    console.error('Error adding mentor:', err);
  } finally {
    process.exit(0);
  }
}

addMentor();
