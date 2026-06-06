const pool = require('./routes/db');

async function run() {
  try {
    console.log('Deleting test users...');
    await pool.query('DELETE FROM registrations WHERE id IN (2, 3, 4, 5, 7)');
    
    console.log('Inserting VP...');
    await pool.query(`INSERT INTO registrations (full_name, department, phone, email, experience, reason, ip_address) VALUES ('MBU CHRISTELLE', 'Administration', '+237 680 811 299', 'vp@biakadebate.club', 'Advanced: Competed Before', 'Administrative Team', '127.0.0.1')`);
    
    console.log('Inserting PRO...');
    await pool.query(`INSERT INTO registrations (full_name, department, phone, email, experience, reason, ip_address) VALUES ('YAYA TOM-PRECIOUS EKONGMANDEM', 'Administration', '+237 652 577 218', 'pro@biakadebate.club', 'Advanced: Competed Before', 'Administrative Team', '127.0.0.1')`);
    
    console.log('Successfully updated registrations database!');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
