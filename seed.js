const pool = require('./api/db');

async function seed() {
  const leaders = [
    { role: "President", role_fr: "President", name: "Grace Ngwa", phone: "+237 690 100 101", email: "president@biakadebate.club", photo_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80", bio: "Background information coming soon..." },
    { role: "Vice President", role_fr: "Vice-presidente", name: "Daniel Ebot", phone: "+237 680 811 299", email: "vp@biakadebate.club", photo_path: "images/vp.jpg", bio: "Background information coming soon..." },
    { role: "Secretary General", role_fr: "Secretaire general", name: "NKENGANYI STEADFAST BEKWIKE", phone: "+237 674 003 001", email: "nkengsteadbeks@gmail.com", photo_path: "images/sg.jpg", bio: "Background information coming soon..." },
    { role: "Public Relations Officer", role_fr: "Charge de communication", name: "Kevin Mbella", phone: "+237 652 577 218", email: "pro@biakadebate.club", photo_path: "images/pro.jpg", bio: "Background information coming soon..." }
  ];

  for (const leader of leaders) {
    await pool.query(
      `INSERT INTO leaders (name, role, role_fr, phone, email, bio, photo_path) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [leader.name, leader.role, leader.role_fr, leader.phone, leader.email, leader.bio, leader.photo_path]
    );
  }
  
  console.log('Seeded leaders successfully!');
  process.exit();
}

// Wait a bit for DB to initialize tables first
setTimeout(seed, 2000);
