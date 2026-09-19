const { Pool } = require('pg');

const bio = `I'm Nkenganyi Steadfast 
Software Engineering student Biaka 
a Civic leader (Civic Core Cameroon) and CEO of a startup(CamTech Solutions)
we offer  id/ passport pre enrollment, video editing, web/ App dev etc.
I am a tech enthusiast, lover of Politics Culture and debating systems.

one Big Christian!`;

async function updateDB() {
  // Update Neon
  const neonPool = new Pool({ connectionString: 'postgresql://neondb_owner:npg_jHiTsSmRO08J@ep-icy-night-apxgqn53-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require', ssl: { rejectUnauthorized: false } });
  await neonPool.query('UPDATE leaders SET bio = $1 WHERE id = 1', [bio]);
  await neonPool.end();
  console.log('Neon updated');

  // Update Local
  const localPool = new Pool({ connectionString: 'postgresql://postgres:slim.v.@localhost:5432/biakadebateclub' });
  await localPool.query('UPDATE leaders SET bio = $1 WHERE id = 1', [bio]);
  await localPool.end();
  console.log('Local updated');
}
updateDB().catch(console.error);
