const { Pool } = require('pg');

const localPool = new Pool({
  connectionString: 'postgresql://postgres:slim.v.@localhost:5432/biakadebateclub'
});

const neonPool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_jHiTsSmRO08J@ep-icy-night-apxgqn53-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: { rejectUnauthorized: false }
});

async function migrate() {
  try {
    console.log('Connecting to Neon and creating tables...');
    
    // Drop tables on Neon first
    await neonPool.query('DROP TABLE IF EXISTS registrations, news_posts, gallery_images, leaders, admin_users, app_stats CASCADE;');
    
    // Create tables on Neon
    await neonPool.query(`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        department VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(255),
        experience VARCHAR(50) NOT NULL,
        reason TEXT NOT NULL,
        ip_address VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS news_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        type VARCHAR(50) NOT NULL,
        media VARCHAR(500),
        text TEXT NOT NULL,
        author_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS gallery_images (
        id SERIAL PRIMARY KEY,
        file_path VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS leaders (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(100) NOT NULL,
        role_fr VARCHAR(100) NOT NULL,
        phone VARCHAR(50),
        email VARCHAR(100),
        photo_path VARCHAR(255),
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS admin_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'admin',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      CREATE TABLE IF NOT EXISTS app_stats (
        id SERIAL PRIMARY KEY,
        campus VARCHAR(255) DEFAULT 'BUIB',
        visits INTEGER DEFAULT 0
      );
      INSERT INTO app_stats (campus, visits) 
      SELECT 'BUIB', 0 WHERE NOT EXISTS (SELECT 1 FROM app_stats);
    `);

    console.log('Fetching local data...');
    const localRegs = await localPool.query('SELECT * FROM registrations');
    const localNews = await localPool.query('SELECT * FROM news_posts');
    const localLeaders = await localPool.query('SELECT * FROM leaders');
    const localStats = await localPool.query('SELECT * FROM app_stats');
    
    console.log(`Found ${localRegs.rowCount} regs, ${localNews.rowCount} news, ${localLeaders.rowCount} leaders. Migrating...`);

    // Clean Neon tables before inserting
    await neonPool.query('TRUNCATE registrations, news_posts, leaders, app_stats RESTART IDENTITY CASCADE');
    
    // Copy Registrations
    for (const r of localRegs.rows) {
      await neonPool.query(
        'INSERT INTO registrations (full_name, department, phone, email, experience, reason, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [r.full_name, r.department, r.phone, r.email, r.experience, r.reason, r.created_at]
      );
    }
    
    // Copy News
    for (const n of localNews.rows) {
      await neonPool.query(
        'INSERT INTO news_posts (title, type, media, text, author_id, created_at) VALUES ($1, $2, $3, $4, $5, $6)',
        [n.title, n.type, n.media, n.text, n.author_id, n.created_at]
      );
    }
    
    // Copy Leaders
    for (const l of localLeaders.rows) {
      await neonPool.query(
        'INSERT INTO leaders (name, role, role_fr, phone, email, photo_path, bio, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
        [l.name, l.role, l.role_fr, l.phone, l.email, l.photo_path, l.bio, l.created_at]
      );
    }

    // Copy Stats
    if (localStats.rows.length > 0) {
      const s = localStats.rows[0];
      await neonPool.query('INSERT INTO app_stats (campus, visits) VALUES ($1, $2)', [s.campus, s.visits]);
    }

    console.log('Migration completed successfully!');
  } catch (e) {
    console.error('Migration failed:', e);
  } finally {
    localPool.end();
    neonPool.end();
  }
}

migrate();
