const logoData = "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"; 
document.querySelector("#schoolLogo").src = `data:image/jpeg;base64,${logoData}`;

const translations = {
  en: {
    clubName: "BIAKA Audacious Agora Debate Club", schoolName: "BIAKA University Institute of Buea", menuLabel: "Menu", navHome: "Home", navAbout: "About", navRegister: "Register", navNews: "News", navContact: "Contact",
    heroEyebrow: "Speak. Reason. Lead.", heroTitle: "The official debate club for sharp voices and stronger minds.", heroLead: "Join students who train in public speaking, critical thinking, research, leadership, diplomacy and respectful argument.", registerNow: "Register Now", seeUpdates: "See Updates",
    visionLabel: "Vision", visionText: "To build confident student leaders who can defend ideas with facts, discipline and respect.", missionLabel: "Mission", missionText: "To train members through debates, workshops, research tasks, school events and inter-university competitions.",
    statMembers: "Registered Members", statLeaders: "Executive Leaders", statActivities: "Planned Activities", statCampus: "Campus Community", statVisits: "Unique Visitors",
    aboutEyebrow: "About the club", aboutTitle: "Administrative team and club identity", aboutClubTitle: "What the club does", aboutClubText: "The BIAKA Audacious Agora Debate Club creates a structured space where students learn to think quickly, research deeply, speak clearly and listen with maturity. Members participate in debates, mock panels, leadership forums, public speaking practice and campus events.",
    galleryEyebrow: "Moments", galleryTitle: "Photo Gallery",
    valueResearch: "Research", valueRespect: "Respect", valueConfidence: "Confidence", valueLeadership: "Leadership",
    registerEyebrow: "Agenda", registerTitle: "The Biaka Audacious Agora Debate Club Membership Registration", fieldName: "Full Name", fieldDepartment: "Department + Level", fieldPhone: "Phone Number / WhatsApp Number", fieldExperience: "Debate Experience", fieldReason: "Why do you want to Join the Biaka Audacious Agora Debate Club?", submitRegistration: "Submit Registration", latestRegistrations: "Latest Registrations", welcomeTitle: "Welcome", welcomeText: "Welcome to the Biaka Audacious Agora Debate Club! After our Pan Africa 2026 Success and with <span class=\"president-name\">TERCY WAINWUL</span> Raising BIAKA Visibility Flag High, we are building something big. This comes with a lot of Opportunities at hands - Competitions, Leadership, Training and Networking.", registrationInstruction: "Fill in this 1 mins form to Register.", meetingDate: "Our Brief meeting is Friday June 5 th 2026.", meetingReminder: "Don't miss out.",
    newsEyebrow: "News and updates", newsTitle: "Latest club activities", postUpdateTitle: "Post an update", postTitle: "Title", postType: "Media Type", postMedia: "Image or Video Link", postText: "Update Text", publishUpdate: "Publish Update",
    contactEyebrow: "Contact", contactTitle: "Reach the club and the school", clubContacts: "Club Contacts", schoolContacts: "School Contact", schoolAddress: "Bokoko, Biaka Street, Buea, South West Region, Cameroon", schoolWebsite: "School Website", socialMedia: "Social Media", footerText: "BIAKA Audacious Agora Debate Club - Built for student leadership, civic reasoning and public speaking.",
    registered: "Registration submitted successfully.", noRegistrations: "No registrations yet."
  },
  fr: {
    clubName: "Club de Debat Audacieux Agora BIAKA", schoolName: "Institut Universitaire BIAKA de Buea", menuLabel: "Menu", navHome: "Accueil", navAbout: "A propos", navRegister: "Inscription", navNews: "Actualites", navContact: "Contact",
    heroEyebrow: "Parler. Raisonner. Diriger.", heroTitle: "Le club officiel de debat pour des voix fortes et des esprits solides.", heroLead: "Rejoignez des etudiants formes a la prise de parole, a la pensee critique, a la recherche, au leadership, a la diplomatie et au debat respectueux.", registerNow: "S'inscrire", seeUpdates: "Voir les actualites",
    visionLabel: "Vision", visionText: "Former des leaders etudiants capables de defendre les idees avec des faits, de la discipline et du respect.", missionLabel: "Mission", missionText: "Former les membres a travers des debats, ateliers, recherches, evenements scolaires et competitions interuniversitaires.",
    statMembers: "Membres inscrits", statLeaders: "Dirigeants", statActivities: "Activites prevues", statCampus: "Communaute du campus", statVisits: "Visiteurs Uniques",
    aboutEyebrow: "A propos du club", aboutTitle: "Equipe administrative et identite du club", aboutClubTitle: "Ce que fait le club", aboutClubText: "Le Club de Debat Audacieux Agora BIAKA offre un cadre structure ou les etudiants apprennent a penser vite, chercher en profondeur, parler clairement et ecouter avec maturite. Les membres participent aux debats, panels simules, forums de leadership, exercices de prise de parole et evenements du campus.",
    galleryEyebrow: "Moments", galleryTitle: "Galerie de Photos",
    valueResearch: "Recherche", valueRespect: "Respect", valueConfidence: "Confiance", valueLeadership: "Leadership",
    registerEyebrow: "Agenda", registerTitle: "Inscription au Club Audacieux Agora BIAKA - Adhesion", fieldName: "Nom complet", fieldDepartment: "Departement + Niveau", fieldPhone: "Numero de telephone / WhatsApp", fieldExperience: "Experience en debat", fieldReason: "Pourquoi voulez-vous rejoindre le Club Audacieux Agora BIAKA?", submitRegistration: "Envoyer l'inscription", latestRegistrations: "Dernieres inscriptions", welcomeTitle: "Bienvenue", welcomeText: "Bienvenue au Club de Debat Audacieux Agora BIAKA! Apres notre succes Pan-Afrique 2026 et avec <span class=\"president-name\">TERCY WAINWUL</span> soulevant le drapeau de visibilite BIAKA, nous construisons quelque chose de grand. Cela vient avec beaucoup d'opportunites - Competitions, Leadership, Formation et Reseautage.", registrationInstruction: "Remplissez ce formulaire d'une minute pour vous inscrire.", meetingDate: "Notre reunion est vendredi 5 juin 2026.", meetingReminder: "Ne manquez pas.",
    newsEyebrow: "Actualites", newsTitle: "Dernieres activites du club", postUpdateTitle: "Publier une actualite", postTitle: "Titre", postType: "Type de media", postMedia: "Lien image ou video", postText: "Texte de l'actualite", publishUpdate: "Publier",
    contactEyebrow: "Contact", contactTitle: "Contacter le club et l'ecole", clubContacts: "Contacts du club", schoolContacts: "Contact de l'ecole", schoolAddress: "Bokoko, Rue Biaka, Buea, Region du Sud-Ouest, Cameroun", schoolWebsite: "Site web de l'ecole", socialMedia: "Reseaux sociaux", footerText: "Club de Debat Audacieux Agora BIAKA - Pour le leadership etudiant, le raisonnement civique et la prise de parole.",
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
  renderLeaders();
  renderRegistrations();
}

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
        <strong>${escapeHtml(getLeaderRole(leader))}: ${escapeHtml(leader.name)}</strong>
        <span>${escapeHtml(leader.phone)}</span>
        <span><a href="mailto:${escapeHtml(leader.email)}">${escapeHtml(leader.email)}</a></span>
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
      
      if (leadersEl) leadersEl.textContent = data.leaders;
      if (activitiesEl) activitiesEl.textContent = data.activities;
      if (campusEl) campusEl.textContent = data.campus;
      if (visitsEl) visitsEl.textContent = data.visits || 0;
      if (memberCountEl) memberCountEl.textContent = data.members || 0;
      
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
