const { Pool } = require('pg');

const neonPool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_jHiTsSmRO08J@ep-icy-night-apxgqn53-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function run() {
  try {
    console.log('Connecting to Neon to delete test users and duplicates...');
    
    // Delete Test User, BAKER MOHAMED, BRANDY from Neon
    await neonPool.query(`DELETE FROM registrations WHERE full_name IN ('Test User', 'BAKER MOHAMED', 'BRANDY')`);
    
    // Also delete any duplicates of Nkenganyi Steadfast Bekwike (keep the one with the smallest ID, delete the rest)
    await neonPool.query(`
      DELETE FROM registrations 
      WHERE full_name = 'Nkenganyi Steadfast Bekwike' 
      AND id NOT IN (
        SELECT MIN(id) FROM registrations WHERE full_name = 'Nkenganyi Steadfast Bekwike'
      )
    `);

    console.log('Successfully cleaned Neon Database!');
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
