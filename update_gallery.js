const pool = require('./routes/db');

async function updateGallery() {
  try {
    await pool.query(
      'UPDATE gallery_images SET title = $1, event_date = $2, description = $3 WHERE id = $4',
      [
        'Pan-Africa Inter-University Championship 2026',
        'June 2026',
        'The BIAKA Audacious Agora Debate Club delegacy participating in the prestigious Pan-Africa Inter-University Debate Championship. Team captain and President Tercy Wainwul led the cohort through intense parliamentary debates on health policy and student leadership, earning national distinction and raising the BIAKA visibility flag high across Africa.',
        1
      ]
    );

    await pool.query(
      'UPDATE gallery_images SET title = $1, event_date = $2, description = $3 WHERE id = $4',
      [
        'Annual Public Speaking & Oratory Masterclass',
        'May 2026',
        'Interactive masterclass hosted at the BIAKA University auditorium. Members and prospective students received intensive hands-on coaching on voice modulation, argument deconstruction, cross-examination techniques, and stage charisma from veteran debaters and faculty advisors.',
        2
      ]
    );

    await pool.query(
      'UPDATE gallery_images SET title = $1, event_date = $2, description = $3 WHERE id = $4',
      [
        'Executive Leadership & Strategy Induction Session',
        'April 2026',
        'Executive board members and department representatives convening for the semester agenda planning session. The leadership committee mapped out the upcoming debate calendar, workshop series, community outreach initiatives, and inter-faculty championship matchups.',
        3
      ]
    );

    console.log('Gallery entries updated successfully!');
  } catch (err) {
    console.error('Error updating gallery entries:', err);
  } finally {
    process.exit();
  }
}

updateGallery();
