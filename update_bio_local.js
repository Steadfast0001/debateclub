const { Pool } = require('pg');

const bio = `I'm Nkenganyi Steadfast 
Software Engineering student Biaka 
a Civic leader (Civic Core Cameroon) and CEO of a startup(CamTech Solutions)
we offer  id/ passport pre enrollment, video editing, web/ App dev etc.
I am a tech enthusiast, lover of Politics Culture and debating systems.

one Big Christian!`;

async function updateDB() {
  try {
    const localPool = new Pool({ connectionString: 'postgresql://postgres:slim.v.@localhost:5432/biakadebateclub' });
    await localPool.query('UPDATE leaders SET bio = $1 WHERE id = 1', [bio]);
    await localPool.end();
    console.log('Local updated');
  } catch (e) {
    console.log('Local failed', e);
  }
}
updateDB();
