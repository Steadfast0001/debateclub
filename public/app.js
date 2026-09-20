const logoImg = document.querySelector("#schoolLogo");
if (logoImg) {
  logoImg.src = "/logo.png?v=11";
}

const translations = {
  en: {
    clubName: "BIAKA Audacious Agora Debate Club", schoolName: "BIAKA University Institute of Buea", menuLabel: "Menu", navHome: "Home", navAbout: "About", navRegister: "Register", navNews: "News", navContact: "Contact",
    heroEyebrow: "Motto: Clear thoughts, strong conviction, respect in delivery.", heroTitle: "The official debate club for sharp voices and stronger minds.", heroLead: "Join students who train in public speaking, critical thinking, research, leadership, diplomacy and respectful argument.", registerNow: "Register Now", seeUpdates: "See Updates",
    visionLabel: "Vision", visionText: "To build confident student leaders who can defend ideas with facts, discipline and respect.", missionLabel: "Mission", missionText: "To train members through debates, workshops, research tasks, school events and inter-university competitions.",
    statMembers: "Registered Members", statLeaders: "Executive Leaders", statActivities: "Planned Activities", statCampus: "Campus Community", statVisits: "Unique Visitors",
    aboutEyebrow: "About the club", aboutTitle: "Administrative team and club identity", aboutClubTitle: "What the club does", aboutClubText: "The BIAKA Audacious Agora Debate Club creates a structured space where students learn to think critically, research deeply, speak clearly and listen with maturity. Members participate in debates, mock panels, leadership forums, public speaking practice and campus events.",
    galleryEyebrow: "Moments", galleryTitle: "Photo Gallery",
    valueResearch: "Research", valueRespect: "Respect", valueConfidence: "Confidence", valueLeadership: "Leadership",
    registerEyebrow: "Agenda", registerTitle: "The Biaka Audacious Agora Debate Club Membership Registration", fieldName: "Full Name", fieldDepartment: "Department + Level", fieldPhone: "Phone Number / WhatsApp Number", fieldExperience: "Debate Experience", fieldReason: "Why do you want to Join the Biaka Audacious Agora Debate Club?", submitRegistration: "Submit Registration", latestRegistrations: "Latest Registrations", welcomeTitle: "Welcome", welcomeText: "Welcome to the Biaka Audacious Agora Debate Club! After our Pan Africa 2026 Success and with <span class=\"president-name\">TERCY WAINWUL</span> Raising BIAKA Visibility Flag High, we are building something big. This comes with a lot of Opportunities at hands - Competitions, Leadership, Training and Networking.", registrationInstruction: "Fill in this 1 mins form to Register.", meetingDate: "Our Brief meeting is Friday June 5 th 2026.", meetingReminder: "Don't miss out.",
    newsEyebrow: "News and updates", newsTitle: "Latest club activities", postUpdateTitle: "Post an update", postTitle: "Title", postType: "Media Type", postMedia: "Image or Video Link", postText: "Update Text", publishUpdate: "Publish Update",
    contactEyebrow: "Contact", contactTitle: "Reach the club and the school", clubContacts: "Club Contacts", schoolContacts: "School Contact", schoolAddress: "Bokoko, Biaka Street, Buea, South West Region, Cameroon", schoolWebsite: "School Website", socialMedia: "Social Media", footerText: "BIAKA Audacious Agora Debate Club - Built for student leadership, civic reasoning and public speaking.",
    footerPresident: "President's Office", footerPresidentRole: "Club President", footerNav: "Navigation",
    sendUsMessage: "Send us a message", yourName: "Your Name", yourEmail: "Your Email", yourMessage: "Message", sendMessage: "Send Message",
    contactSuccess: "Message sent successfully! We will get back to you soon.", contactError: "Failed to send message. Please try again later.",
    registered: "Registration submitted successfully.", noRegistrations: "No registrations yet."
  },
  fr: {
    clubName: "Club de Debat Audacieux Agora BIAKA", schoolName: "Institut Universitaire BIAKA de Buea", menuLabel: "Menu", navHome: "Accueil", navAbout: "A propos", navRegister: "Inscription", navNews: "Actualites", navContact: "Contact",
    heroEyebrow: "Devise: Pensees claires, conviction forte, respect dans l'expression.", heroTitle: "Le club officiel de debat pour des voix fortes et des esprits solides.", heroLead: "Rejoignez des etudiants formes a la prise de parole, a la pensee critique, a la recherche, au leadership, a la diplomatie et au debat respectueux.", registerNow: "S'inscrire", seeUpdates: "Voir les actualites",
    visionLabel: "Vision", visionText: "Former des leaders etudiants capables de defendre les idees avec des faits, de la discipline et du respect.", missionLabel: "Mission", missionText: "Former les membres a travers des debats, ateliers, recherches, evenements scolaires et competitions interuniversitaires.",
    statMembers: "Membres inscrits", statLeaders: "Dirigeants", statActivities: "Activites prevues", statCampus: "Communaute du campus", statVisits: "Visiteurs Uniques",
    aboutEyebrow: "A propos du club", aboutTitle: "Equipe administrative et identite du club", aboutClubTitle: "Ce que fait le club", aboutClubText: "Le Club de Debat Audacieux Agora BIAKA offre un cadre structure ou les etudiants apprennent a penser de maniere critique, chercher en profondeur, parler clairement et ecouter avec maturite. Les membres participent aux debats, panels simules, forums de leadership, exercices de prise de parole et evenements du campus.",
    galleryEyebrow: "Moments", galleryTitle: "Galerie de Photos",
    valueResearch: "Recherche", valueRespect: "Respect", valueConfidence: "Confiance", valueLeadership: "Leadership",
    registerEyebrow: "Agenda", registerTitle: "Inscription au Club Audacieux Agora BIAKA - Adhesion", fieldName: "Nom complet", fieldDepartment: "Departement + Niveau", fieldPhone: "Numero de telephone / WhatsApp", fieldExperience: "Experience en debat", fieldReason: "Pourquoi voulez-vous rejoindre le Club Audacieux Agora BIAKA?", submitRegistration: "Envoyer l'inscription", latestRegistrations: "Dernieres inscriptions", welcomeTitle: "Bienvenue", welcomeText: "Bienvenue au Club de Debat Audacieux Agora BIAKA! Apres notre succes Pan-Afrique 2026 et avec <span class=\"president-name\">TERCY WAINWUL</span> soulevant le drapeau de visibilite BIAKA, nous construisons quelque chose de grand. Cela vient avec beaucoup d'opportunites - Competitions, Leadership, Formation et Reseautage.", registrationInstruction: "Remplissez ce formulaire d'une minute pour vous inscrire.", meetingDate: "Notre reunion est vendredi 5 juin 2026.", meetingReminder: "Ne manquez pas.",
    newsEyebrow: "Actualites", newsTitle: "Dernieres activites du club", postUpdateTitle: "Publier une actualite", postTitle: "Titre", postType: "Type de media", postMedia: "Lien image ou video", postText: "Texte de l'actualite", publishUpdate: "Publier",
    contactEyebrow: "Contact", contactTitle: "Contacter le club et l'ecole", clubContacts: "Contacts du club", schoolContacts: "Contact de l'ecole", schoolAddress: "Bokoko, Rue Biaka, Buea, Region du Sud-Ouest, Cameroun", schoolWebsite: "Site web de l'ecole", socialMedia: "Reseaux sociaux", footerText: "Club de Debat Audacieux Agora BIAKA - Pour le leadership etudiant, le raisonnement civique et la prise de parole.",
    footerPresident: "Bureau du President", footerPresidentRole: "President du Club", footerNav: "Navigation",
    sendUsMessage: "Envoyez-nous un message", yourName: "Votre Nom", yourEmail: "Votre Email", yourMessage: "Message", sendMessage: "Envoyer le message",
    contactSuccess: "Message envoye avec succes ! Nous vous repondrons bientot.", contactError: "Echec de l'envoi du message. Veuillez reessayer plus tard.",
    registered: "Inscription envoyee avec succes.", noRegistrations: "Aucune inscription pour le moment."
  }
};

let leaders = [];

const defaultNews = [
  { title: "Inter-department debate announced", type: "Image", media: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80", text: "The club will host an inter-department debate on health leadership and youth civic responsibility. Registration is open to all BIAKA students.", date: "Latest Update" },
  { title: "Public speaking workshop", type: "Image", media: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80", text: "Members will receive training on voice control, argument structure, rebuttal and stage confidence.", date: "Club Activity" },
  { title: "Weekly practice session", type: "Text", media: "", text: "Practice holds every Wednesday at 3:00 PM. New members should come with a notebook and one topic idea.", date: "Notice" }
];

let currentLang = localStorage.getItem("debate-lang") || "en";
let registrations = JSON.parse(localStorage.getItem("debate-registrations") || "[]");
let news = defaultNews; // Will be overwritten by fetchNews

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[character]);
}

function safeUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return ["http:", "https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function toEmbeddableVideoUrl(value) {
  const url = safeUrl(value);

  if (!url) {
    return "";
  }

  const parsed = new URL(url);

  if (parsed.hostname.includes("youtube.com") && parsed.searchParams.has("v")) {
    return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
  }

  if (parsed.hostname === "youtu.be") {
    return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
  }

  return url;
}

function getLeaderRole(leader) {
  return currentLang === "fr" ? leader.roleFr : leader.role;
}

function getMediaMarkup(item) {
  const media = String(item.media || "").trim();

  if (!media) {
    return "";
  }

  if (String(item.type).toLowerCase() === "video") {
    const videoUrl = toEmbeddableVideoUrl(media);
    return videoUrl ? `<div class="news-video"><iframe src="${escapeHtml(videoUrl)}" title="${escapeHtml(item.title)}" loading="lazy" allowfullscreen></iframe></div>` : "";
  }

  const imageUrl = safeUrl(media);
  return imageUrl ? `<div class="news-media" style="background-image:url('${escapeHtml(imageUrl)}')"></div>` : "";
}

// Translation Logic
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("debate-lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(item => {
    const key = item.dataset.i18n;
    const text = translations[lang][key];
    // Use innerHTML for keys that may contain HTML (like welcomeText with president name span)
    if (key === "welcomeText") {
      item.innerHTML = text;
    } else {
      item.textContent = text;
    }
  });
  document.querySelectorAll(".language-toggle button").forEach(button => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    renderLeaders();
  }
}

// Dark Mode Logic
const savedTheme = localStorage.getItem('clubTheme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    document.querySelectorAll('.theme-toggle').forEach(el => el.textContent = '☀️');
  } else {
    document.documentElement.classList.remove('dark');
    document.querySelectorAll('.theme-toggle').forEach(el => el.textContent = '🌙');
  }
  localStorage.setItem('clubTheme', theme);
}

setTheme(savedTheme);

document.addEventListener('click', (e) => {
  if (e.target.closest('.theme-toggle')) {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
  }
});

function renderLeaders() {
  const leadersGrid = document.querySelector("#leadersGrid");
  if (leadersGrid) {
    leadersGrid.innerHTML = leaders.map((leader, index) => `
      <article class="leader-card" onclick="openLeaderModal(${index})">
        <div class="leader-photo" style="background-image:url('${escapeHtml(leader.photo)}')"></div>
        <div class="leader-body">
          <span>${escapeHtml(getLeaderRole(leader))}</span>
          <h3>${escapeHtml(leader.name)}</h3>
          <p><a href="mailto:${escapeHtml(leader.email)}" onclick="event.stopPropagation()">${escapeHtml(leader.email)}</a><br>${escapeHtml(leader.phone)}</p>
        </div>
      </article>
    `).join("");
  }

  const contactList = document.querySelector("#contactList");
  if (contactList) {
    contactList.innerHTML = leaders.map(leader => `
      <div class="contact-item">
        <div class="contact-role-badge">${escapeHtml(getLeaderRole(leader))}</div>
        <div class="contact-name">${escapeHtml(leader.name)}</div>
        <div class="contact-item-links">
          ${leader.phone ? `<a href="tel:${escapeHtml(leader.phone)}" class="contact-badge">📞 ${escapeHtml(leader.phone)}</a>` : ''}
          ${leader.email ? `<a href="mailto:${escapeHtml(leader.email)}" class="contact-badge">✉️ ${escapeHtml(leader.email)}</a>` : ''}
        </div>
      </div>
    `).join("");
  }
}

window.openLeaderModal = function(index) {
  const leader = leaders[index];
  if (!leader) return;
  
  document.querySelector("#modalPhoto").style.backgroundImage = `url('${escapeHtml(leader.photo)}')`;
  document.querySelector("#modalRole").textContent = getLeaderRole(leader);
  document.querySelector("#modalName").textContent = leader.name;
  document.querySelector("#modalPhone").textContent = leader.phone;
  document.querySelector("#modalEmail").innerHTML = `<a href="mailto:${escapeHtml(leader.email)}">${escapeHtml(leader.email)}</a>`;
  document.querySelector("#modalBioText").innerHTML = leader.bio || "More information coming soon...";
  
  document.querySelector("#leaderModal").classList.remove("hidden");
};

window.closeLeaderModal = function() {
  document.querySelector("#leaderModal").classList.add("hidden");
};

function renderRegistrations() {
  const memberCount = document.querySelector("#memberCount");
  if (memberCount) {
    memberCount.textContent = registrations.length;
  }
  const regList = document.querySelector("#registrationsList");
  if (regList) {
    regList.innerHTML = registrations.slice(0, 6).map(member => `
      <div class="registration-item">
        <strong>${escapeHtml(member.full_name || member.name)}</strong>
        <span>${escapeHtml(member.department || member.program)}</span>
        <span>${escapeHtml(member.experience || member.interest)}</span>
      </div>
    `).join("") || `<p>${translations[currentLang].noRegistrations}</p>`;
  }
}

function renderNews() {
  const newsGrid = document.querySelector("#newsGrid");
  if (newsGrid) {
    newsGrid.innerHTML = news.map(item => `
      <article class="news-card">
        ${getMediaMarkup(item)}
        <div class="news-body">
          <div style="margin-bottom: 10px; color: var(--muted); font-size: 14px;"><strong>${escapeHtml(item.date)}</strong> &bull; ${escapeHtml(item.type)}</div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="news-text">${item.text}</div>
        </div>
      </article>
    `).join("");
  }
}

const registrationForm = document.querySelector("#registrationForm");
if (registrationForm) {
  registrationForm.addEventListener("submit", async event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const messageEl = document.querySelector("#formMessage");
    const submitBtn = event.target.querySelector('button[type="submit"]');
    
    try {
      submitBtn.disabled = true;
      messageEl.textContent = "Submitting...";
      
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          department: form.get("department"),
          phone: form.get("phone"),
          experience: form.get("experience"),
          reason: form.get("reason")
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        messageEl.textContent = translations[currentLang].registered;
        messageEl.style.color = "var(--green)";
        event.target.reset();
        // Refresh member count
        registrations.unshift(data);
        renderRegistrations();
      } else {
        messageEl.textContent = data.error || "Registration failed";
        messageEl.style.color = "var(--red)";
      }
    } catch (error) {
      console.error("Registration error:", error);
      messageEl.textContent = "Network error. Please try again.";
      messageEl.style.color = "var(--red)";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

async function fetchNews() {
  try {
    const res = await fetch('/api/news');
    if (res.ok) {
      const data = await res.json();
      if (data.news && data.news.length > 0) {
        // Format dates for display
        news = data.news.map(n => ({
          title: n.title,
          type: n.type,
          media: n.media,
          text: n.text,
          date: new Date(n.created_at).toLocaleDateString()
        }));
      }
    }
  } catch (err) { console.error('Failed to fetch news', err); }
  renderNews();
}

let newsQuill, leaderQuill;

if (document.querySelector('#newsQuillEditor')) {
  newsQuill = new Quill('#newsQuillEditor', {
    theme: 'snow',
    placeholder: 'Write your news update here...',
    modules: { toolbar: [['bold', 'italic', 'underline'], [{'list': 'ordered'}, {'list': 'bullet'}], [{'header': [1, 2, 3, false]}], ['clean']] }
  });
}

if (document.querySelector('#leaderQuillEditor')) {
  leaderQuill = new Quill('#leaderQuillEditor', {
    theme: 'snow',
    placeholder: 'Write their background biography here...',
    modules: { toolbar: [['bold', 'italic', 'underline'], [{'list': 'ordered'}, {'list': 'bullet'}], [{'header': [1, 2, 3, false]}], ['clean']] }
  });
}

const newsForm = document.querySelector("#newsForm");
if (newsForm) {
  newsForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (newsQuill) document.querySelector('#newsTextInput').value = newsQuill.root.innerHTML;
    const form = new FormData(event.target);
    const messageEl = document.querySelector("#newsFormMessage");
    const adminKey = localStorage.getItem('debate-admin-key');
    const newsId = document.querySelector('#newsIdInput').value;
    
    try {
      const isEditing = !!newsId;
      const res = await fetch('/api/news', {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey || ''
        },
        body: JSON.stringify({
          id: isEditing ? newsId : undefined,
          title: form.get("title"),
          type: form.get("type"),
          media: form.get("media"),
          text: form.get("text")
        })
      });
      
      const data = await res.json();
      if (res.ok) {
        messageEl.textContent = isEditing ? 'News updated successfully!' : 'News posted successfully!';
        messageEl.style.color = 'var(--green)';
        
        // Reset form
        event.target.reset();
        document.querySelector('#newsIdInput').value = '';
        if (newsQuill) newsQuill.root.innerHTML = '';
        document.querySelector('#newsSubmitBtn').textContent = 'Publish Update';
        document.querySelector('#newsCancelBtn').classList.add('hidden');
        
        fetchNews();
        if (document.querySelector('#loadAdminNewsBtn')) {
          document.querySelector('#loadAdminNewsBtn').click();
        }
      } else {
        messageEl.textContent = data.error || 'Failed to post news';
        messageEl.style.color = 'var(--red)';
      }
    } catch (err) {
      messageEl.textContent = 'Network error.';
      messageEl.style.color = 'var(--red)';
    }
  });

  const newsCancelBtn = document.querySelector('#newsCancelBtn');
  if (newsCancelBtn) {
    newsCancelBtn.addEventListener('click', () => {
      newsForm.reset();
      document.querySelector('#newsIdInput').value = '';
      if (newsQuill) newsQuill.root.innerHTML = '';
      document.querySelector('#newsSubmitBtn').textContent = 'Publish Update';
      newsCancelBtn.classList.add('hidden');
      document.querySelector('#newsFormMessage').textContent = '';
    });
  }
}

// Admin login logic
const adminLoginForm = document.querySelector('#adminLoginForm');
const loginSection = document.querySelector('#admin-login-section');
const dashboardSection = document.querySelector('#admin-dashboard-section');
const logoutBtn = document.querySelector('#logoutBtn');

function checkAdminAuth() {
  if (localStorage.getItem('debate-admin-key')) {
    if (loginSection) loginSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');
  } else {
    if (loginSection) loginSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
  }
}

if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const key = document.querySelector('#adminKeyInput').value;
    localStorage.setItem('debate-admin-key', key);
    checkAdminAuth();
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('debate-admin-key');
    checkAdminAuth();
  });
}

checkAdminAuth();

async function fetchStats() {
  try {
    const res = await fetch('/api/stats');
    if (res.ok) {
      const data = await res.json();
      const leadersEl = document.querySelector('#statLeadersCount');
      const activitiesEl = document.querySelector('#statActivitiesCount');
      const campusEl = document.querySelector('#statCampusText');
      const visitsEl = document.querySelector('#statVisitsCount');
      const memberCountEl = document.querySelector('#memberCount');
      
      const adminVisitsEl = document.querySelector('#adminVisitsCount');
      const adminMembersEl = document.querySelector('#adminMembersCount');
      const adminLeadersEl = document.querySelector('#adminLeadersCount');
      const adminActivitiesEl = document.querySelector('#adminActivitiesCount');
      
      if (leadersEl) leadersEl.textContent = data.leaders;
      if (activitiesEl) activitiesEl.textContent = data.activities;
      if (campusEl) campusEl.textContent = data.campus;
      if (visitsEl) visitsEl.textContent = data.visits || 0;
      if (memberCountEl) memberCountEl.textContent = data.members || 0;
      
      if (adminVisitsEl) adminVisitsEl.textContent = data.visits || 0;
      if (adminMembersEl) adminMembersEl.textContent = data.members || 0;
      if (adminLeadersEl) adminLeadersEl.textContent = data.leaders;
      if (adminActivitiesEl) adminActivitiesEl.textContent = data.activities;
      
      const aLeaders = document.querySelector('#adminStatLeaders');
      const aActivities = document.querySelector('#adminStatActivities');
      const aCampus = document.querySelector('#adminStatCampus');
      if (aLeaders) aLeaders.value = data.leaders;
      if (aActivities) aActivities.value = data.activities;
      if (aCampus) aCampus.value = data.campus;
    }
  } catch (err) { console.error('Failed to fetch stats', err); }
}

async function trackVisit() {
  if (!localStorage.getItem('debate-visited')) {
    try {
      const res = await fetch('/api/visit', { method: 'POST' });
      if (res.ok) {
        localStorage.setItem('debate-visited', 'true');
        fetchStats(); // refresh stats after visit is counted
      }
    } catch (err) { console.error('Failed to track visit', err); }
  }
}
trackVisit();

async function fetchGallery() {
  const publicGrid = document.querySelector('#publicGalleryGrid');
  if (!publicGrid) return;
  try {
    const res = await fetch('/api/gallery');
    const data = await res.json();
    if (res.ok && data.images) {
      if (data.images.length === 0) {
        publicGrid.innerHTML = '<p style="grid-column: 1 / -1; color: var(--muted); text-align: center;">No photos uploaded yet.</p>';
        return;
      }
      publicGrid.innerHTML = data.images.map(img => `
        <img src="${img.file_path}" alt="Gallery Image" loading="lazy">
      `).join('');
    }
  } catch(e) {
    console.error('Failed to fetch gallery', e);
  }
}
fetchGallery();


const statsForm = document.querySelector("#statsForm");
if (statsForm) {
  statsForm.addEventListener("submit", async event => {
    event.preventDefault();
    const form = new FormData(event.target);
    const messageEl = document.querySelector("#statsFormMessage");
    const adminKey = localStorage.getItem('debate-admin-key');
    
    try {
      const res = await fetch('/api/stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey || ''
        },
        body: JSON.stringify({
          leaders: form.get("leaders"),
          activities: form.get("activities"),
          campus: form.get("campus")
        })
      });
      
      const data = await res.json();
      if (res.ok) {
        messageEl.textContent = 'Stats updated successfully!';
        messageEl.style.color = 'var(--green)';
        fetchStats();
      } else {
        messageEl.textContent = data.error || 'Failed to update stats';
        messageEl.style.color = 'var(--red)';
      }
    } catch (err) {
      messageEl.textContent = 'Network error.';
      messageEl.style.color = 'var(--red)';
    }
  });
}

const loadRegistrationsBtn = document.querySelector('#loadRegistrationsBtn');
const adminRegistrationsList = document.querySelector('#adminRegistrationsList');

if (loadRegistrationsBtn) {
  loadRegistrationsBtn.addEventListener('click', async () => {
    const adminKey = localStorage.getItem('debate-admin-key');
    try {
      adminRegistrationsList.innerHTML = 'Loading...';
      const res = await fetch('/api/admin/registrations', {
        headers: { 'x-admin-key': adminKey || '' }
      });
      const data = await res.json();
      if (res.ok) {
        if (data.registrations.length === 0) {
          adminRegistrationsList.innerHTML = '<p>No registrations found.</p>';
          return;
        }
        adminRegistrationsList.innerHTML = data.registrations.map(reg => `
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: #fafafa;">
            <strong>${escapeHtml(reg.full_name)}</strong> (${escapeHtml(reg.department)})<br>
            <small style="color: var(--muted);">Phone: ${escapeHtml(reg.phone)} | Exp: ${escapeHtml(reg.experience)} | Date: ${new Date(reg.created_at).toLocaleDateString()}</small><br>
            <p style="margin-top: 8px; font-size: 13px;">${escapeHtml(reg.reason)}</p>
          </div>
        `).join('');
      } else {
        adminRegistrationsList.innerHTML = `<p style="color: var(--red);">${escapeHtml(data.error)}</p>`;
      }
    } catch (err) {
      adminRegistrationsList.innerHTML = '<p style="color: var(--red);">Network error</p>';
    }
  });
}

const downloadPdfBtn = document.querySelector('#downloadPdfBtn');
if (downloadPdfBtn) {
  downloadPdfBtn.addEventListener('click', async () => {
    const adminKey = localStorage.getItem('debate-admin-key');
    try {
      downloadPdfBtn.textContent = 'Generating...';
      const res = await fetch('/api/admin/registrations', {
        headers: { 'x-admin-key': adminKey || '' }
      });
      const data = await res.json();
      if (res.ok && data.registrations && data.registrations.length > 0) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Header
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text('BIAKA UNIVERSITY INSTITUTE OF BUEA', 105, 15, null, null, 'center');
        doc.setFontSize(14);
        doc.text('BIAKA AUDACIOUS AGORA DEBATE CLUB', 105, 23, null, null, 'center');
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text('List of Registered Members', 105, 33, null, null, 'center');
        
        // Table Data
        const tableBody = data.registrations.map((reg, index) => [
          index + 1,
          reg.full_name || 'N/A',
          reg.email || 'N/A',
          reg.phone || 'N/A',
          reg.department || 'N/A',
          reg.reason || 'N/A',
          new Date(reg.created_at).toLocaleDateString()
        ]);
        
        doc.autoTable({
          startY: 40,
          head: [['#', 'Name', 'Email', 'Phone', 'Level/Dept', 'Reason', 'Date']],
          body: tableBody,
          styles: { fontSize: 8, cellPadding: 2 },
          headStyles: { fillColor: [11, 46, 89] }, // var(--blue)
          columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 35 },
            2: { cellWidth: 35 },
            3: { cellWidth: 25 },
            4: { cellWidth: 30 },
            5: { cellWidth: 35 },
            6: { cellWidth: 20 }
          }
        });
        
        // Signature Line
        const finalY = doc.lastAutoTable.finalY || 40;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('Tercy Wainwul', 195, finalY + 30, null, null, 'right');
        doc.setFont('helvetica', 'normal');
        doc.text('President, BIAKA Audacious Agora Debate Club', 195, finalY + 35, null, null, 'right');
        
        // Save
        doc.save('BIAKA_Debate_Club_Registrations.pdf');
      } else {
        alert('No registrations to download.');
      }
    } catch (err) {
      console.error(err);
      alert('Error generating PDF.');
    } finally {
      downloadPdfBtn.textContent = 'Download as PDF';
    }
  });
}

const loadAdminNewsBtn = document.querySelector('#loadAdminNewsBtn');
const adminNewsList = document.querySelector('#adminNewsList');

if (loadAdminNewsBtn) {
  loadAdminNewsBtn.addEventListener('click', async () => {
    try {
      adminNewsList.innerHTML = 'Loading...';
      const res = await fetch('/api/news');
      const data = await res.json();
      if (res.ok) {
        if (!data.news || data.news.length === 0) {
          adminNewsList.innerHTML = '<p>No news posts found.</p>';
          return;
        }
        window.loadedAdminNews = data.news;
        adminNewsList.innerHTML = data.news.map(n => `
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: #fafafa; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>${escapeHtml(n.title)}</strong> <small style="color: var(--muted);">(${new Date(n.created_at).toLocaleDateString()})</small>
            </div>
            <div style="display: flex; gap: 8px;">
              <button onclick="editNewsAdmin(${n.id})" style="background: var(--blue); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Edit</button>
              <button onclick="deleteNews(${n.id})" style="background: var(--red); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
            </div>
          </div>
        `).join('');
      } else {
        adminNewsList.innerHTML = `<p style="color: var(--red);">Failed to load news.</p>`;
      }
    } catch (err) {
      adminNewsList.innerHTML = '<p style="color: var(--red);">Network error</p>';
    }
  });
}
window.editNewsAdmin = function(id) {
  if (!window.loadedAdminNews) return;
  const newsItem = window.loadedAdminNews.find(n => n.id === id);
  if (!newsItem) return;

  document.querySelector('#newsIdInput').value = newsItem.id;
  document.querySelector('#newsTitleInput').value = newsItem.title;
  document.querySelector('#newsTypeInput').value = newsItem.type;
  document.querySelector('#newsMediaInput').value = newsItem.media || '';
  
  if (newsQuill) {
    newsQuill.root.innerHTML = newsItem.text || '';
  }

  document.querySelector('#newsSubmitBtn').textContent = 'Save Update';
  document.querySelector('#newsCancelBtn').classList.remove('hidden');
  document.querySelector('#newsFormMessage').textContent = '';

  // Scroll to form
  document.querySelector('#newsForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

window.deleteNews = async function(id) {
  if (!confirm('Are you sure you want to delete this news post?')) return;
  const adminKey = localStorage.getItem('debate-admin-key');
  try {
    const res = await fetch(`/api/news?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey || '' }
    });
    const data = await res.json();
    if (res.ok) {
      alert('News post deleted.');
      if (loadAdminNewsBtn) loadAdminNewsBtn.click(); // reload list
    } else {
      alert('Failed to delete: ' + data.error);
    }
  } catch (err) {
    alert('Network error while deleting.');
  }
};

const galleryUploadForm = document.querySelector('#galleryUploadForm');
if (galleryUploadForm) {
  galleryUploadForm.addEventListener('submit', async event => {
    event.preventDefault();
    const messageEl = document.querySelector('#galleryUploadMessage');
    const adminKey = localStorage.getItem('debate-admin-key');
    const formData = new FormData(event.target);
    
    try {
      messageEl.textContent = 'Uploading...';
      messageEl.style.color = 'var(--blue)';
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'x-admin-key': adminKey || '' },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        messageEl.textContent = 'Image uploaded successfully!';
        messageEl.style.color = 'var(--green)';
        galleryUploadForm.reset();
        const loadBtn = document.querySelector('#loadAdminGalleryBtn');
        if(loadBtn) loadBtn.click();
        fetchGallery(); // Refresh public gallery if on the same page
      } else {
        messageEl.textContent = data.error || 'Failed to upload image';
        messageEl.style.color = 'var(--red)';
      }
    } catch (err) {
      messageEl.textContent = 'Network error during upload.';
      messageEl.style.color = 'var(--red)';
    }
  });
}

const loadAdminGalleryBtn = document.querySelector('#loadAdminGalleryBtn');
const adminGalleryList = document.querySelector('#adminGalleryList');

if (loadAdminGalleryBtn) {
  loadAdminGalleryBtn.addEventListener('click', async () => {
    try {
      adminGalleryList.innerHTML = 'Loading...';
      const res = await fetch('/api/gallery');
      const data = await res.json();
      if (res.ok) {
        if (!data.images || data.images.length === 0) {
          adminGalleryList.innerHTML = '<p>No gallery images found.</p>';
          return;
        }
        adminGalleryList.innerHTML = data.images.map(img => `
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: #fafafa; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="${img.file_path}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
              <span style="font-size: 13px; color: var(--muted);">${new Date(img.created_at).toLocaleDateString()}</span>
            </div>
            <button onclick="deleteGalleryImage(${img.id})" style="background: var(--red); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
          </div>
        `).join('');
      } else {
        adminGalleryList.innerHTML = `<p style="color: var(--red);">Failed to load gallery.</p>`;
      }
    } catch (err) {
      adminGalleryList.innerHTML = '<p style="color: var(--red);">Network error</p>';
    }
  });
}

window.deleteGalleryImage = async function(id) {
  if (!confirm('Are you sure you want to delete this gallery image?')) return;
  const adminKey = localStorage.getItem('debate-admin-key');
  try {
    const res = await fetch(`/api/gallery?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey || '' }
    });
    const data = await res.json();
    if (res.ok) {
      alert('Image deleted.');
      if (loadAdminGalleryBtn) loadAdminGalleryBtn.click();
      fetchGallery();
    } else {
      alert('Failed to delete: ' + data.error);
    }
  } catch (err) {
    alert('Network error while deleting.');
  }
};

const menuBtn = document.querySelector("#menuButton");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const mainNav = document.querySelector("#mainNav");
    if (mainNav) mainNav.classList.toggle("open");
  });
}

document.querySelectorAll(".language-toggle button").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function highlightActiveNav() {
  const currentPath = window.location.pathname === '/' ? '/' : window.location.pathname;
  const currentHash = window.location.hash;
  
  document.querySelectorAll("#mainNav a").forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    
    // Check exact matches including hashes
    if (href === currentPath + currentHash) {
      link.classList.add("active");
    } 
    // Check path matches without hashes
    else if (href === currentPath && !currentHash && !href.includes('#')) {
      link.classList.add("active");
    }
    // Handle root / index.html mappings gracefully
    else if ((href === '/' || href === 'index.html') && (currentPath === '/' || currentPath === '/index.html') && currentHash === '') {
      link.classList.add("active");
    }
  });
}

// Fetch dynamic leaders from DB
async function fetchLeaders() {
  try {
    const res = await fetch('/api/leaders');
    if (res.ok) {
      const data = await res.json();
      if (data.leaders && data.leaders.length > 0) {
        leaders = data.leaders.map(l => ({
          id: l.id,
          role: l.role,
          roleFr: l.role_fr || l.role,
          name: l.name,
          phone: l.phone,
          email: l.email,
          photo: l.photo_path || '',
          bio: l.bio
        }));
        
        const roleOrder = {
          "president": 1,
          "vice president": 2,
          "secretary general": 3,
          "public relation officer": 4,
          "pro": 4
        };
        
        leaders.sort((a, b) => {
          const aOrder = roleOrder[(a.role || "").toLowerCase().trim()] || 99;
          const bOrder = roleOrder[(b.role || "").toLowerCase().trim()] || 99;
          return aOrder - bOrder;
        });
      }
    }
  } catch (err) {
    console.error('Failed to fetch leaders', err);
  }
  renderLeaders();
}

// Admin Leaders Logic
const leaderUploadForm = document.querySelector('#leaderUploadForm');
if (leaderUploadForm) {
  leaderUploadForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (leaderQuill) document.querySelector('#leaderBioInput').value = leaderQuill.root.innerHTML;
    const messageEl = document.querySelector('#leaderUploadMessage');
    const adminKey = localStorage.getItem('debate-admin-key');
    const formData = new FormData(event.target);
    
    try {
      messageEl.textContent = 'Uploading...';
      messageEl.style.color = 'var(--blue)';
      
      const id = document.querySelector('#editLeaderId').value;
      const method = id ? 'PUT' : 'POST';
      
      const res = await fetch('/api/leaders', {
        method: method,
        headers: { 'x-admin-key': adminKey || '' },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        messageEl.textContent = id ? 'Leader updated successfully!' : 'Leader added successfully!';
        messageEl.style.color = 'var(--green)';
        leaderUploadForm.reset();
        if (leaderQuill) leaderQuill.root.innerHTML = '';
        document.querySelector('#editLeaderId').value = '';
        document.querySelector('#submitLeaderBtn').textContent = 'Add Leader';
        const cancelBtn = document.querySelector('#cancelEditLeaderBtn');
        if (cancelBtn) cancelBtn.classList.add('hidden');
        
        const loadBtn = document.querySelector('#loadAdminLeadersBtn');
        if (loadBtn) loadBtn.click();
        fetchLeaders(); // Refresh public site if on same page
      } else {
        messageEl.textContent = data.error || 'Failed to add leader';
        messageEl.style.color = 'var(--red)';
      }
    } catch (err) {
      messageEl.textContent = 'Network error.';
      messageEl.style.color = 'var(--red)';
    }
  });
}

const loadAdminLeadersBtn = document.querySelector('#loadAdminLeadersBtn');
const adminLeadersList = document.querySelector('#adminLeadersList');

if (loadAdminLeadersBtn) {
  loadAdminLeadersBtn.addEventListener('click', async () => {
    try {
      adminLeadersList.innerHTML = 'Loading...';
      const res = await fetch('/api/leaders');
      const data = await res.json();
      if (res.ok) {
        if (!data.leaders || data.leaders.length === 0) {
          adminLeadersList.innerHTML = '<p>No leaders found.</p>';
          return;
        }
        adminLeadersList.innerHTML = data.leaders.map(l => `
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: #fafafa; display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <img src="${escapeHtml(l.photo_path)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
              <div>
                <strong>${escapeHtml(l.name)}</strong><br>
                <span style="font-size: 12px; color: var(--muted);">${escapeHtml(l.role)}</span>
              </div>
            <div style="display: flex; gap: 5px;">
              <button onclick='editLeaderAdmin(${JSON.stringify(l).replace(/'/g, "&#39;")})' style="background: var(--blue); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Edit</button>
              <button onclick="deleteLeader(${l.id})" style="background: var(--red); color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Delete</button>
            </div>
          </div>
        `).join('');
      } else {
        adminLeadersList.innerHTML = `<p style="color: var(--red);">Failed to load leaders.</p>`;
      }
    } catch (err) {
      adminLeadersList.innerHTML = '<p style="color: var(--red);">Network error</p>';
    }
  });
}

window.deleteLeader = async function(id) {
  if (!confirm('Are you sure you want to delete this leader?')) return;
  const adminKey = localStorage.getItem('debate-admin-key');
  try {
    const res = await fetch(`/api/leaders?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey || '' }
    });
    const data = await res.json();
    if (res.ok) {
      alert('Leader deleted.');
      if (loadAdminLeadersBtn) loadAdminLeadersBtn.click();
      fetchLeaders();
    } else {
      alert('Failed to delete: ' + data.error);
    }
  } catch (err) {
    alert('Network error while deleting.');
  }
};

window.editLeaderAdmin = function(leader) {
  document.querySelector('#editLeaderId').value = leader.id;
  document.querySelector('#leaderNameInput').value = leader.name;
  document.querySelector('#leaderRoleInput').value = leader.role;
  document.querySelector('#leaderRoleFrInput').value = leader.role_fr || leader.role;
  document.querySelector('#leaderPhoneInput').value = leader.phone || '';
  document.querySelector('#leaderEmailInput').value = leader.email || '';
  document.querySelector('#leaderBioInput').value = leader.bio || '';
  if (leaderQuill) leaderQuill.root.innerHTML = leader.bio || '';
  
  document.querySelector('#submitLeaderBtn').textContent = 'Save Leader';
  document.querySelector('#cancelEditLeaderBtn').classList.remove('hidden');
  document.querySelector('#leaderUploadForm').scrollIntoView({ behavior: 'smooth' });
};

const cancelEditLeaderBtn = document.querySelector('#cancelEditLeaderBtn');
if (cancelEditLeaderBtn) {
  cancelEditLeaderBtn.addEventListener('click', () => {
    document.querySelector('#leaderUploadForm').reset();
    if (leaderQuill) leaderQuill.root.innerHTML = '';
    document.querySelector('#editLeaderId').value = '';
    document.querySelector('#submitLeaderBtn').textContent = 'Add Leader';
    cancelEditLeaderBtn.classList.add('hidden');
  });
}

fetchLeaders();
renderRegistrations();
fetchNews();
fetchStats();
setLanguage(currentLang);
highlightActiveNav();
window.addEventListener('hashchange', highlightActiveNav);

// Handle Public Contact Form
const publicContactForm = document.getElementById("publicContactForm");
if (publicContactForm) {
  publicContactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = publicContactForm.querySelector("button[type='submit']");
    const msg = document.getElementById("contactFormMessage");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;
    msg.textContent = "";
    msg.style.color = "var(--ink)";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: document.getElementById("contactName").value,
          email: document.getElementById("contactEmail").value,
          message: document.getElementById("contactMessage").value
        })
      });

      if (response.ok) {
        msg.textContent = translations[currentLang]?.contactSuccess || "Message sent successfully!";
        msg.style.color = "var(--green)";
        publicContactForm.reset();
      } else {
        const err = await response.json();
        throw new Error(err.error || "Failed to send");
      }
    } catch (error) {
      msg.textContent = translations[currentLang]?.contactError || "Failed to send message.";
      msg.style.color = "var(--red)";
      console.error(error);
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}
