const logoImg = document.querySelector("#schoolLogo");
if (logoImg) {
  logoImg.src = "/logo.png?v=11";
}

const translations = {
  en: {
    clubName: "BIAKA Audacious Agora Debate Club", schoolName: "BIAKA University Institute of Buea", menuLabel: "Menu", navHome: "Home", navAbout: "About", navBpHub: "BP Hub", navRegister: "Register", navNews: "News", navContact: "Contact",
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
    registered: "Registration submitted successfully.", noRegistrations: "No registrations yet.",
    chancellorRole: "Vice Chancellor", chancellorTitle: "Vice Chancellor, BIAKA University Institute of Buea", chancellorDesc: "Providing visionary institutional patronage, academic excellence, and leadership backing for the club.",
    directorRole: "Deputy Vice Chancellor", directorTitle: "Deputy Vice Chancellor / Club Mentor & Adviser", directorDesc: "Guiding institutional excellence, research depth, critical reasoning, and strategic mentorship for the club.",
    toolsEyebrow: "Interactive Training", toolsTitle: "Debate Practice Lab",
    timerTitle: "⏱️ Parliamentary Speech Timer", timerDesc: "Standard 7-minute parliamentary speech timer with protected time indicators for Points of Information (POI).",
    timerStart: "Start", timerPause: "Pause", timerReset: "Reset",
    motionGenTitle: "🎯 Motion Generator", motionGenDesc: "Need practice topics? Generate competitive, thought-provoking debate motions across economics, tech, governance, and ethics.",
    motionGenBtn: "Generate New Motion",
    pwaInstallText: "Install BIAKA Debate Club App for instant offline access.", pwaInstallBtn: "Install App"
  },
  fr: {
    clubName: "Club de Debat Audacieux Agora BIAKA", schoolName: "Institut Universitaire BIAKA de Buea", menuLabel: "Menu", navHome: "Accueil", navAbout: "A propos", navBpHub: "Pôle BP", navRegister: "Inscription", navNews: "Actualites", navContact: "Contact",
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
    registered: "Inscription envoyee avec succes.", noRegistrations: "Aucune inscription pour le moment.",
    chancellorRole: "Vice-Chancelière", chancellorTitle: "Vice-Chancelière, Institut Universitaire BIAKA de Buea", chancellorDesc: "Offrant un patronage institutionnel visionnaire, l'excellence académique et le soutien au leadership du club.",
    directorRole: "Vice-Chancelier Adjoint", directorTitle: "Vice-Chancelier Adjoint / Mentor et Conseiller", directorDesc: "Guidant l'excellence institutionnelle, la recherche approfondie, le raisonnement critique et le mentorat stratégique.",
    toolsEyebrow: "Entraînement Interactif", toolsTitle: "Laboratoire de Pratique du Débat",
    timerTitle: "⏱️ Chronomètre de Discours Parlementaire", timerDesc: "Chronomètre standard de 7 minutes pour discours parlementaire avec indicateurs de points d'information (POI).",
    timerStart: "Démarrer", timerPause: "Pause", timerReset: "Réinitialiser",
    motionGenTitle: "🎯 Générateur de Sujets de Débat", motionGenDesc: "Besoin de sujets pour vous entraîner ? Générez des motions stimulantes en économie, tech, gouvernance et éthique.",
    motionGenBtn: "Générer un Nouveau Sujet",
    pwaInstallText: "Installez l'application BIAKA Debate Club pour un accès direct hors ligne.", pwaInstallBtn: "Installer l'App"
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
  if (document.querySelector("#leadersGrid") || document.querySelector("#contactList")) {
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
        if (typeof showToast === 'function') {
          showToast(translations[currentLang].registered || "Registration submitted successfully! 🎉", "success");
        }
        event.target.reset();
        // Refresh member count
        registrations.unshift(data);
        renderRegistrations();
      } else {
        messageEl.textContent = data.error || "Registration failed";
        messageEl.style.color = "var(--red)";
        if (typeof showToast === 'function') {
          showToast(data.error || "Registration failed. Please check inputs.", "error");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      messageEl.textContent = "Network error. Please try again.";
      messageEl.style.color = "var(--red)";
      if (typeof showToast === 'function') {
        showToast("Network error. Please try again.", "error");
      }
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

// Admin auth & Password Recovery logic
const adminLoginForm = document.querySelector('#adminLoginForm');
const adminForgotForm = document.querySelector('#adminForgotForm');
const adminResetForm = document.querySelector('#adminResetForm');

const loginSection = document.querySelector('#admin-login-section');
const forgotSection = document.querySelector('#admin-forgot-section');
const resetSection = document.querySelector('#admin-reset-section');
const dashboardSection = document.querySelector('#admin-dashboard-section');
const logoutBtn = document.querySelector('#logoutBtn');

const showForgotPasswordBtn = document.querySelector('#showForgotPasswordBtn');
const backToLoginBtn = document.querySelector('#backToLoginBtn');

function checkAdminAuth() {
  const urlParams = new URLSearchParams(window.location.search);
  const resetToken = urlParams.get('reset_token');
  const resetEmail = urlParams.get('email');

  // If reset token is present in URL, show the reset password form!
  if (resetToken && resetEmail && resetSection) {
    if (loginSection) loginSection.classList.add('hidden');
    if (forgotSection) forgotSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
    resetSection.classList.remove('hidden');
    
    const emailHidden = document.querySelector('#resetEmailHidden');
    const tokenHidden = document.querySelector('#resetTokenHidden');
    if (emailHidden) emailHidden.value = resetEmail;
    if (tokenHidden) tokenHidden.value = resetToken;
    return;
  }

  if (localStorage.getItem('debate-admin-key')) {
    if (loginSection) loginSection.classList.add('hidden');
    if (forgotSection) forgotSection.classList.add('hidden');
    if (resetSection) resetSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.remove('hidden');
  } else {
    if (loginSection) loginSection.classList.remove('hidden');
    if (forgotSection) forgotSection.classList.add('hidden');
    if (resetSection) resetSection.classList.add('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
  }
}

// Show Forgot Password View
if (showForgotPasswordBtn) {
  showForgotPasswordBtn.addEventListener('click', () => {
    if (loginSection) loginSection.classList.add('hidden');
    if (forgotSection) forgotSection.classList.remove('hidden');
    const emailVal = document.querySelector('#adminEmailInput')?.value;
    if (emailVal && document.querySelector('#forgotEmailInput')) {
      document.querySelector('#forgotEmailInput').value = emailVal;
    }
  });
}

// Back to Login
if (backToLoginBtn) {
  backToLoginBtn.addEventListener('click', () => {
    if (forgotSection) forgotSection.classList.add('hidden');
    if (loginSection) loginSection.classList.remove('hidden');
  });
}

// Handle Login Submit
if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#adminEmailInput')?.value || '';
    const password = document.querySelector('#adminPasswordInput')?.value || '';
    const msgEl = document.querySelector('#adminLoginMessage');
    const submitBtn = document.querySelector('#adminLoginBtn');

    if (msgEl) {
      msgEl.textContent = 'Authenticating...';
      msgEl.style.color = 'var(--blue)';
    }
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('debate-admin-key', data.token);
        localStorage.setItem('debate-admin-email', data.email);
        checkAdminAuth();
      } else {
        if (msgEl) {
          msgEl.textContent = data.error || 'Invalid email or password';
          msgEl.style.color = 'var(--red)';
        }
      }
    } catch (err) {
      if (msgEl) {
        msgEl.textContent = 'Network error. Please try again.';
        msgEl.style.color = 'var(--red)';
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Handle Forgot Password Submit
if (adminForgotForm) {
  adminForgotForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#forgotEmailInput')?.value || '';
    const msgEl = document.querySelector('#adminForgotMessage');
    const submitBtn = document.querySelector('#forgotSubmitBtn');

    if (msgEl) {
      msgEl.textContent = 'Sending reset link...';
      msgEl.style.color = 'var(--blue)';
    }
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        if (msgEl) {
          msgEl.textContent = data.message || 'Password reset link sent to your email!';
          msgEl.style.color = 'var(--green)';
        }
        adminForgotForm.reset();
      } else {
        if (msgEl) {
          msgEl.textContent = data.error || 'Failed to send reset email.';
          msgEl.style.color = 'var(--red)';
        }
      }
    } catch (err) {
      if (msgEl) {
        msgEl.textContent = 'Network error. Please try again.';
        msgEl.style.color = 'var(--red)';
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

// Handle Reset Password Submit
if (adminResetForm) {
  adminResetForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#resetEmailHidden')?.value;
    const token = document.querySelector('#resetTokenHidden')?.value;
    const newPassword = document.querySelector('#resetNewPasswordInput')?.value;
    const confirmPassword = document.querySelector('#resetConfirmPasswordInput')?.value;
    const msgEl = document.querySelector('#adminResetMessage');
    const submitBtn = document.querySelector('#resetSubmitBtn');

    if (newPassword !== confirmPassword) {
      if (msgEl) {
        msgEl.textContent = 'Passwords do not match.';
        msgEl.style.color = 'var(--red)';
      }
      return;
    }

    if (msgEl) {
      msgEl.textContent = 'Updating password...';
      msgEl.style.color = 'var(--blue)';
    }
    if (submitBtn) submitBtn.disabled = true;

    try {
      const res = await fetch('/api/admin/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, newPassword })
      });
      const data = await res.json();
      if (res.ok) {
        if (msgEl) {
          msgEl.textContent = 'Password updated successfully! Redirecting to login...';
          msgEl.style.color = 'var(--green)';
        }
        setTimeout(() => {
          window.location.href = '/admin.html';
        }, 2000);
      } else {
        if (msgEl) {
          msgEl.textContent = data.error || 'Failed to update password.';
          msgEl.style.color = 'var(--red)';
        }
      }
    } catch (err) {
      if (msgEl) {
        msgEl.textContent = 'Network error. Please try again.';
        msgEl.style.color = 'var(--red)';
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('debate-admin-key');
    localStorage.removeItem('debate-admin-email');
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

let galleryImages = [];
let currentGalleryIndex = 0;

async function fetchGallery() {
  const publicGrid = document.querySelector('#publicGalleryGrid');
  if (!publicGrid) return;
  try {
    const res = await fetch('/api/gallery');
    const data = await res.json();
    if (res.ok && data.images) {
      galleryImages = data.images;
      if (galleryImages.length === 0) {
        publicGrid.innerHTML = '<p style="grid-column: 1 / -1; color: var(--muted); text-align: center;">No photos uploaded yet.</p>';
        return;
      }
      publicGrid.innerHTML = galleryImages.map((img, index) => {
        const title = img.title || 'Debate Club Moment';
        return `
          <div class="gallery-photo-item" onclick="openGalleryModal(${index})" role="button" tabindex="0" aria-label="View event story for ${escapeHtml(title)}">
            <img src="${img.file_path}" alt="${escapeHtml(title)}" loading="lazy">
            <div class="gallery-photo-overlay">
              <span class="gallery-photo-icon">🔍</span>
            </div>
          </div>
        `;
      }).join('');
    }
  } catch(e) {
    console.error('Failed to fetch gallery', e);
  }
}

window.openGalleryModal = function(index) {
  if (!galleryImages || galleryImages.length === 0) return;
  if (index < 0) index = galleryImages.length - 1;
  if (index >= galleryImages.length) index = 0;
  
  currentGalleryIndex = index;
  const item = galleryImages[index];
  if (!item) return;

  const modal = document.querySelector('#galleryModal');
  const modalImg = document.querySelector('#galleryModalImage');
  const modalTitle = document.querySelector('#galleryModalTitle');
  const modalDate = document.querySelector('#galleryModalDate');
  const modalDesc = document.querySelector('#galleryModalDescription');
  const modalCounter = document.querySelector('#galleryModalCounter');

  if (modalImg) modalImg.src = item.file_path;
  if (modalTitle) modalTitle.textContent = item.title || 'Debate Club Moment';
  if (modalDate) modalDate.textContent = item.event_date || (item.created_at ? new Date(item.created_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : 'Event Update');
  if (modalDesc) modalDesc.textContent = item.description || 'No additional event writeup provided for this photo.';
  if (modalCounter) modalCounter.textContent = `${index + 1} of ${galleryImages.length}`;

  if (modal) modal.classList.remove('hidden');
};

window.closeGalleryModal = function() {
  const modal = document.querySelector('#galleryModal');
  if (modal) modal.classList.add('hidden');
};

window.prevGalleryImage = function() {
  openGalleryModal(currentGalleryIndex - 1);
};

window.nextGalleryImage = function() {
  openGalleryModal(currentGalleryIndex + 1);
};

// Keyboard listener for modal closing and navigation
document.addEventListener('keydown', (e) => {
  const galleryModal = document.querySelector('#galleryModal');
  if (galleryModal && !galleryModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeGalleryModal();
    if (e.key === 'ArrowLeft') prevGalleryImage();
    if (e.key === 'ArrowRight') nextGalleryImage();
  }
  const leaderModal = document.querySelector('#leaderModal');
  if (leaderModal && !leaderModal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLeaderModal();
  }
});

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
    const fileInput = document.querySelector('#galleryImageInput');
    const filesCount = fileInput && fileInput.files ? fileInput.files.length : 1;
    
    try {
      messageEl.textContent = `Uploading ${filesCount} image(s)... Please wait.`;
      messageEl.style.color = 'var(--blue)';
      const res = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'x-admin-key': adminKey || '' },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        messageEl.textContent = data.message || `Successfully uploaded ${data.count || filesCount} photo(s)!`;
        messageEl.style.color = 'var(--green)';
        galleryUploadForm.reset();
        const loadBtn = document.querySelector('#loadAdminGalleryBtn');
        if(loadBtn) loadBtn.click();
        fetchGallery(); // Refresh public gallery if on the same page
      } else {
        messageEl.textContent = data.error || 'Failed to upload images';
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
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px; overflow: hidden;">
              <img src="${img.file_path}" style="width: 56px; height: 56px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
              <div style="overflow: hidden;">
                <strong style="display: block; font-size: 13.5px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(img.title || 'Untitled Moment')}</strong>
                <small style="display: block; font-size: 11px; color: var(--blue); margin-bottom: 2px;">${escapeHtml(img.event_date || new Date(img.created_at).toLocaleDateString())}</small>
                <p style="font-size: 11.5px; color: var(--muted); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(img.description || 'No writeup')}</p>
              </div>
            </div>
            <button onclick="deleteGalleryImage(${img.id})" style="background: var(--red); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; flex-shrink: 0; font-size: 12px; font-weight: 600;">Delete</button>
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

// Close mobile nav when clicking a navigation link
document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    const mainNav = document.querySelector("#mainNav");
    if (mainNav && mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
    }
  });
});

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
        
        function getRoleRank(role) {
          const r = (role || "").toLowerCase().trim();
          if (r.includes("vice president") || r.includes("vice-president") || r.includes("vice")) return 2;
          if (r.includes("president")) return 1;
          if (r.includes("secretary")) return 3;
          if (r.includes("public relation") || r.includes("pro") || r.includes("communication")) return 4;
          return 10;
        }

        leaders.sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role));
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
          <div style="padding: 12px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel); display: flex; justify-content: space-between; align-items: center; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1;">
              <img src="${escapeHtml(l.photo_path)}" alt="${escapeHtml(l.name)}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 6px; flex-shrink: 0;">
              <div style="min-width: 0;">
                <strong style="display: block; font-size: 13.5px; color: var(--ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(l.name)}</strong>
                <span style="font-size: 11.5px; color: var(--muted);">${escapeHtml(l.role)}</span>
              </div>
            </div>
            <div style="display: flex; gap: 6px; flex-shrink: 0;">
              <button onclick='editLeaderAdmin(${JSON.stringify(l).replace(/'/g, "&#39;")})' style="background: var(--blue); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">Edit</button>
              <button onclick="deleteLeader(${l.id})" style="background: var(--red); color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">Delete</button>
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
        const successText = translations[currentLang]?.contactSuccess || "Message sent successfully!";
        msg.textContent = successText;
        msg.style.color = "var(--green)";
        if (typeof showToast === 'function') {
          showToast(successText, "success");
        }
        publicContactForm.reset();
      } else {
        const err = await response.json();
        throw new Error(err.error || "Failed to send");
      }
    } catch (error) {
      const errorText = error.message || translations[currentLang]?.contactError || "Failed to send message.";
      msg.textContent = errorText;
      msg.style.color = "var(--red)";
      if (typeof showToast === 'function') {
        showToast(errorText, "error");
      }
      console.error(error);
    } finally {
      btn.textContent = originalText;
      btn.disabled = false;
    }
  });
}

// ==========================================================================
// TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message, type = 'info', duration = 4000) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success' ? '✅' : (type === 'error' ? '⚠️' : 'ℹ️');
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-msg">${escapeHtml(message)}</span>
    <button class="toast-close" type="button" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  const closeToast = () => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  };

  toast.querySelector('.toast-close').addEventListener('click', closeToast);

  if (duration > 0) {
    setTimeout(closeToast, duration);
  }
}
window.showToast = showToast;

// ==========================================================================
// BRITISH PARLIAMENTARY (BP) SUITE ENGINE & AUDIO SYNTHESIZER
// ==========================================================================

// Web Audio API Bell Synthesizer (Zero External Assets Required)
let audioCtx = null;
function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playDebateBell(count = 1) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const chime = (delay) => {
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1760, ctx.currentTime); // High resonant metallic chime
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.5, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.1);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 1.1);
      }, delay);
    };

    for (let i = 0; i < count; i++) {
      chime(i * 350);
    }
  } catch (e) {
    console.log('Debate bell audio note:', e);
  }
}
window.playDebateBell = playDebateBell;

// --- Tab Switcher ---
function switchBpTab(tabId) {
  document.querySelectorAll('.bp-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.bp-tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `bp-panel-${tabId}`);
  });
}
window.switchBpTab = switchBpTab;

// --- 7-Minute Parliamentary Speech Timer ---
let timerInterval = null;
let timerSeconds = 420; // 7 minutes
let isTimerRunning = false;

function updateTimerDisplay() {
  const display = document.getElementById("timerDisplay");
  const badge = document.getElementById("timerBadge");
  if (!display) return;

  const isOvertime = timerSeconds < 0;
  const absSecs = Math.abs(timerSeconds);
  const mins = Math.floor(absSecs / 60);
  const secs = absSecs % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  display.textContent = isOvertime ? `-${formatted}` : formatted;
  display.style.color = isOvertime ? "var(--red)" : (timerSeconds <= 60 ? "var(--gold)" : "var(--blue)");

  if (badge) {
    if (timerSeconds > 360) {
      badge.textContent = "Protected Time: 0:00 - 1:00 (No POIs)";
      badge.style.background = "rgba(59, 130, 246, 0.12)";
      badge.style.color = "#2563eb";
    } else if (timerSeconds > 60) {
      badge.textContent = "Open Floor: 1:00 - 6:00 (POIs Allowed 🔔)";
      badge.style.background = "rgba(34, 197, 94, 0.12)";
      badge.style.color = "#16a34a";
    } else if (timerSeconds > 0) {
      badge.textContent = "Protected Finish: 6:00 - 7:00 (No POIs ⚠️)";
      badge.style.background = "rgba(234, 179, 8, 0.15)";
      badge.style.color = "#ca8a04";
    } else if (timerSeconds >= -20) {
      badge.textContent = "Time Expired: 20s Grace Period (Conclude! 🔔🔔)";
      badge.style.background = "rgba(239, 68, 68, 0.15)";
      badge.style.color = "#dc2626";
    } else {
      badge.textContent = "Hard Cutoff / Overtime Penalty 🛑";
      badge.style.background = "rgba(239, 68, 68, 0.25)";
      badge.style.color = "#b91c1c";
    }
  }
}

function startDebateTimer() {
  getAudioContext();
  if (isTimerRunning) return;
  isTimerRunning = true;
  const startBtn = document.getElementById("timerStartBtn");
  if (startBtn) startBtn.textContent = "Running...";

  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();

    // 1-minute bell (floor opens)
    if (timerSeconds === 360) {
      playDebateBell(1);
      showToast("🔔 1 Minute Mark: POIs are now OPEN!", "info");
    }
    // 6-minute bell (floor closes)
    else if (timerSeconds === 60) {
      playDebateBell(1);
      showToast("⚠️ 6 Minute Mark: Protected finish — POIs are CLOSED!", "info");
    }
    // 7-minute bell (time up)
    else if (timerSeconds === 0) {
      playDebateBell(2);
      showToast("🔔🔔 7 Minute Mark: Time is UP! Please conclude speech.", "error");
    }
    // 7:20 hard cutoff
    else if (timerSeconds === -20) {
      playDebateBell(3);
      showToast("🛑 7:20 Overtime: Chair must gavel debater to sit.", "error");
    }
  }, 1000);
}

function pauseDebateTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  const startBtn = document.getElementById("timerStartBtn");
  if (startBtn) startBtn.textContent = "Resume";
}

function resetDebateTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerSeconds = 420;
  updateTimerDisplay();
  const startBtn = document.getElementById("timerStartBtn");
  if (startBtn) startBtn.textContent = "Start";
}

// --- 15-Second POI Mini Stopwatch ---
let poiInterval = null;
let poiSeconds = 15;

function startPoiTimer() {
  getAudioContext();
  clearInterval(poiInterval);
  poiSeconds = 15;
  const poiDisplay = document.getElementById("poiTimerDisplay");
  if (poiDisplay) poiDisplay.textContent = "15s";

  poiInterval = setInterval(() => {
    if (poiSeconds > 0) {
      poiSeconds--;
      if (poiDisplay) poiDisplay.textContent = `${poiSeconds}s`;
    } else {
      clearInterval(poiInterval);
      playDebateBell(1);
      showToast("⏱️ POI Limit Reached (15s Max)! Speaker must resume.", "info");
    }
  }, 1000);
}

function resetPoiTimer() {
  clearInterval(poiInterval);
  poiSeconds = 15;
  const poiDisplay = document.getElementById("poiTimerDisplay");
  if (poiDisplay) poiDisplay.textContent = "15s";
}

// --- 15-Minute Preparation Countdown Clock ---
let prepInterval = null;
let prepSeconds = 900; // 15 mins
let isPrepRunning = false;

function updatePrepDisplay() {
  const display = document.getElementById("prepDisplay");
  if (!display) return;
  const mins = Math.floor(prepSeconds / 60);
  const secs = prepSeconds % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startPrepTimer() {
  getAudioContext();
  if (isPrepRunning) return;
  isPrepRunning = true;
  const btn = document.getElementById("prepStartBtn");
  if (btn) btn.textContent = "Running...";

  prepInterval = setInterval(() => {
    if (prepSeconds > 0) {
      prepSeconds--;
      updatePrepDisplay();

      if (prepSeconds === 600) {
        playDebateBell(1);
        showToast("📢 10 Mins Left: Finalize framework & main case arguments!", "info");
      } else if (prepSeconds === 300) {
        playDebateBell(1);
        showToast("📢 5 Mins Left: Prepare individual speeches and anticipated rebuttals!", "info");
      } else if (prepSeconds === 60) {
        playDebateBell(2);
        showToast("⚠️ 1 Min Left: Please take your seats in the chamber!", "info");
      }
    } else {
      clearInterval(prepInterval);
      isPrepRunning = false;
      playDebateBell(3);
      showToast("🔔🔔🔔 15 Minutes Prep Expired! Prime Minister, take the floor.", "success");
      if (btn) btn.textContent = "Start Prep";
    }
  }, 1000);
}

function pausePrepTimer() {
  clearInterval(prepInterval);
  isPrepRunning = false;
  const btn = document.getElementById("prepStartBtn");
  if (btn) btn.textContent = "Resume";
}

function resetPrepTimer() {
  clearInterval(prepInterval);
  isPrepRunning = false;
  prepSeconds = 900;
  updatePrepDisplay();
  const btn = document.getElementById("prepStartBtn");
  if (btn) btn.textContent = "Start Prep";
}

window.startDebateTimer = startDebateTimer;
window.pauseDebateTimer = pauseDebateTimer;
window.resetDebateTimer = resetDebateTimer;
window.startPoiTimer = startPoiTimer;
window.resetPoiTimer = resetPoiTimer;
window.startPrepTimer = startPrepTimer;
window.pausePrepTimer = pausePrepTimer;
window.resetPrepTimer = resetPrepTimer;

// ==========================================================================
// 4-TEAM BP ROOM MATCHER & PRACTICE ALLOCATOR
// ==========================================================================
const sampleDebaters = [
  "Tercy Wainwul", "Bryan Eyong", "Blessing Nkem", "David Tabi",
  "Sarah Mba", "Emmanuel Ndip", "Faith Bih", "Kelvin Fongod", "Dr. Nemkul Samuel (Adjudicator)"
];

function loadSampleDebaters() {
  const area = document.getElementById("roomDebatersInput");
  if (area) {
    area.value = sampleDebaters.join("\n");
  }
}
window.loadSampleDebaters = loadSampleDebaters;

let lastBpAllocation = null;

function generateBpRoom() {
  const input = document.getElementById("roomDebatersInput")?.value || "";
  const names = input.split("\n").map(n => n.trim()).filter(n => n.length > 0);

  if (names.length < 8) {
    showToast("Please enter at least 8 debater names to fill the BP room.", "error");
    return;
  }

  // Shuffle names
  const shuffled = [...names].sort(() => Math.random() - 0.5);

  lastBpAllocation = {
    og: { pm: shuffled[0], dpm: shuffled[1] },
    oo: { lo: shuffled[2], dlo: shuffled[3] },
    cg: { mg: shuffled[4], gw: shuffled[5] },
    co: { mo: shuffled[6], ow: shuffled[7] },
    chair: shuffled[8] || "Appointed Club Chair"
  };

  document.getElementById("ogPm").textContent = lastBpAllocation.og.pm;
  document.getElementById("ogDpm").textContent = lastBpAllocation.og.dpm;
  document.getElementById("ooLo").textContent = lastBpAllocation.oo.lo;
  document.getElementById("ooDlo").textContent = lastBpAllocation.oo.dlo;
  document.getElementById("cgMg").textContent = lastBpAllocation.cg.mg;
  document.getElementById("cgGw").textContent = lastBpAllocation.cg.gw;
  document.getElementById("coMo").textContent = lastBpAllocation.co.mo;
  document.getElementById("coOw").textContent = lastBpAllocation.co.ow;
  document.getElementById("roomChair").textContent = lastBpAllocation.chair;

  document.getElementById("bpRoomResult").classList.remove("hidden");
  showToast("4-Team BP Room successfully allocated! 🏛️", "success");
}
window.generateBpRoom = generateBpRoom;

function copyBpRoomWhatsApp() {
  if (!lastBpAllocation) {
    showToast("Generate a room allocation first.", "error");
    return;
  }
  const currentMotion = document.getElementById("motionText")?.textContent || "Official Practice Motion";
  const text = `🏛️ *BIAKA DEBATE CLUB - BRITISH PARLIAMENTARY ROOM*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 *MOTION:* ${currentMotion}

📍 *OPENING GOVERNMENT (OG)*
• PM: ${lastBpAllocation.og.pm}
• DPM: ${lastBpAllocation.og.dpm}

📍 *OPENING OPPOSITION (OO)*
• LO: ${lastBpAllocation.oo.lo}
• DLO: ${lastBpAllocation.oo.dlo}

📍 *CLOSING GOVERNMENT (CG)*
• MG: ${lastBpAllocation.cg.mg}
• GW: ${lastBpAllocation.cg.gw}

📍 *CLOSING OPPOSITION (CO)*
• MO: ${lastBpAllocation.co.mo}
• OW: ${lastBpAllocation.co.ow}

⚖️ *CHAIR / ADJUDICATOR:* ${lastBpAllocation.chair}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Prep Time: 15 Minutes. Good luck debaters!`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("BP Room copied to clipboard! Paste directly into WhatsApp.", "success");
  });
}
window.copyBpRoomWhatsApp = copyBpRoomWhatsApp;

// ==========================================================================
// BP MOTION BANK WITH TYPES & INFOSLIDES
// ==========================================================================
const bpMotionsBank = [
  {
    type: "THW",
    category: "AI & Technology",
    text: "This House Would ban the use of autonomous generative AI in university grading and admissions.",
    infoslide: "Generative AI systems are increasingly deployed in higher education institutions to grade essays, detect plagiarism, and screen scholarship applications."
  },
  {
    type: "THBT",
    category: "African Economics & Development",
    text: "This House Believes That African nations should adopt a single continental currency under the AfCFTA.",
    infoslide: "The African Continental Free Trade Area (AfCFTA) creates the largest free trade area in the world by number of participating countries."
  },
  {
    type: "THR",
    category: "Healthcare & Bioethics",
    text: "This House Regrets the commercialization and private patenting of life-saving pharmaceutical drugs.",
    infoslide: "Pharmaceutical companies spend billions on R&D but often patent drugs for 20 years, making them inaccessible to developing nations."
  },
  {
    type: "TH, as [Actor], W",
    category: "Geopolitics & Governance",
    text: "This House, as the African Union, Would suspend and sanction member states that grant foreign military base concessions.",
    infoslide: "Multiple global powers (US, France, China, UAE, Russia) maintain military installations across the Horn of Africa and the Sahel."
  },
  {
    type: "THS",
    category: "Education Policy",
    text: "This House Supports making public speaking and structured debating a mandatory requirement for all university graduates.",
    infoslide: "Civic institutions report a decline in civil discourse and leadership communication among emerging university graduates."
  },
  {
    type: "THW",
    category: "Law & Criminal Justice",
    text: "This House Would abolish mandatory minimum sentencing laws for non-violent offenses.",
    infoslide: "Mandatory minimum sentencing strips judicial discretion, resulting in uniform prison terms regardless of individual circumstances."
  },
  {
    type: "THBT",
    category: "Youth & Political Leadership",
    text: "This House Believes That youth quotas should be legally enforced in national parliaments across Africa.",
    infoslide: "Over 60% of Africa's population is under 25, yet the average age of national parliamentarians remains above 55."
  },
  {
    type: "THR",
    category: "Environment & Energy",
    text: "This House Regrets the global narrative that holds developing nations equally responsible for carbon reduction targets.",
    infoslide: "Developing nations produce less than 5% of historical global emissions while suffering severe climatic disruption."
  }
];

let currentMotionFilter = "ALL";

function filterMotions(type, btnElem) {
  currentMotionFilter = type;
  document.querySelectorAll(".motion-filter-chip").forEach(b => b.classList.remove("active"));
  if (btnElem) btnElem.classList.add("active");
  getRandomMotion();
}
window.filterMotions = filterMotions;

function getRandomMotion() {
  const filtered = currentMotionFilter === "ALL" 
    ? bpMotionsBank 
    : bpMotionsBank.filter(m => m.type === currentMotionFilter);

  if (filtered.length === 0) return;
  const m = filtered[Math.floor(Math.random() * filtered.length)];

  const typeEl = document.getElementById("motionTypeBadge");
  const catEl = document.getElementById("motionCategory");
  const textEl = document.getElementById("motionText");
  const infoEl = document.getElementById("motionInfoslide");

  if (typeEl) typeEl.textContent = m.type;
  if (catEl) catEl.textContent = m.category;
  if (textEl) textEl.textContent = `"${m.text}"`;
  
  if (infoEl) {
    if (m.infoslide) {
      infoEl.innerHTML = `<strong>Infoslide / Context:</strong> ${m.infoslide}`;
      infoEl.classList.remove("hidden");
    } else {
      infoEl.classList.add("hidden");
    }
  }

  showToast(`New ${m.type} motion loaded! 📜`, "success", 2000);
}
window.getRandomMotion = getRandomMotion;

// ==========================================================================
// BP ADJUDICATOR BALLOT & SPEAKER SCORE CALCULATOR
// ==========================================================================
function updateBallotScores() {
  const teams = ['og', 'oo', 'cg', 'co'];
  const ranks = [];
  let hasTie = false;

  teams.forEach(t => {
    const s1 = parseFloat(document.getElementById(`${t}Score1`)?.value) || 0;
    const s2 = parseFloat(document.getElementById(`${t}Score2`)?.value) || 0;
    const total = s1 + s2;
    const totalEl = document.getElementById(`${t}TotalScore`);
    if (totalEl) totalEl.textContent = total > 0 ? total : '—';

    const rankSelect = document.getElementById(`${t}Rank`);
    if (rankSelect && rankSelect.value) {
      if (ranks.includes(rankSelect.value)) {
        hasTie = true;
      }
      ranks.push(rankSelect.value);
    }
  });

  const tieWarn = document.getElementById("ballotTieWarning");
  if (tieWarn) {
    tieWarn.classList.toggle("hidden", !hasTie);
  }
}
window.updateBallotScores = updateBallotScores;

function copyBallotWhatsApp() {
  const motion = document.getElementById("motionText")?.textContent || "Practice Round Motion";
  const chair = document.getElementById("ballotChairName")?.value || "Chief Adjudicator";
  
  const getTeamData = (code, name) => {
    const rank = document.getElementById(`${code}Rank`)?.value || "N/A";
    const s1 = document.getElementById(`${code}Score1`)?.value || "—";
    const s2 = document.getElementById(`${code}Score2`)?.value || "—";
    const total = document.getElementById(`${code}TotalScore`)?.textContent || "—";
    const pts = rank === '1' ? '3 pts' : rank === '2' ? '2 pts' : rank === '3' ? '1 pt' : '0 pts';
    return `• *${name}*: ${rank} Rank (${pts}) | Scores: ${s1}, ${s2} (Total: ${total})`;
  };

  const text = `⚖️ *BIAKA DEBATE CLUB - OFFICIAL BP BALLOT*
━━━━━━━━━━━━━━━━━━━━━━━━━━
📜 *MOTION:* ${motion}
👨‍⚖️ *CHAIR:* ${chair}

📊 *ROUND RESULTS:*
${getTeamData('og', 'Opening Government (OG)')}
${getTeamData('oo', 'Opening Opposition (OO)')}
${getTeamData('cg', 'Closing Government (CG)')}
${getTeamData('co', 'Closing Opposition (CO)')}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Recorded via BIAKA British Parliamentary System`;

  navigator.clipboard.writeText(text).then(() => {
    showToast("Ballot results copied to clipboard for WhatsApp! 📊", "success");
  });
}
window.copyBallotWhatsApp = copyBallotWhatsApp;

// ==========================================================================
// BP 8-SPEAKER ROLE MASTERCLASS
// ==========================================================================
const bpRolesMasterclass = {
  pm: {
    title: "Prime Minister (PM)",
    team: "Opening Government (OG)",
    duty: "Sets the definitions, builds the case framework, establishes the model/policy mechanism, and delivers the opening substantive arguments.",
    dos: [
      "Define ambiguous terms fairly without unfair narrowing (no squirreling).",
      "Explain the exact policy mechanism and state burden.",
      "Deliver 2 to 3 well-mechanized positive arguments with deep impacts."
    ],
    donts: [
      "Do not define the debate into a tautology or truism.",
      "Do not spend more than 1 minute on definitions.",
      "Do not leave the team without concrete comparative benefits."
    ]
  },
  lo: {
    title: "Leader of Opposition (LO)",
    team: "Opening Opposition (OO)",
    duty: "Clashes directly with the PM's definitions, presents the Opposition framework/counter-model, rebuts OG arguments, and builds constructive OO case.",
    dos: [
      "Explicitly state your stance: status quo defense or counter-model.",
      "Directly challenge the root premises of OG's policy mechanism.",
      "Deliver independent opposition constructive points (not just rebuttal)."
    ],
    donts: [
      "Do not challenge definitions unless OG's definition is literally impossible to debate.",
      "Do not just list negative consequences without weighing stakeholder impacts."
    ]
  },
  dpm: {
    title: "Deputy Prime Minister (DPM)",
    team: "Opening Government (OG)",
    duty: "Defends PM's case from LO attack, deepens and rebuilds OG mechanisms, refutes LO counter-model, and adds new analysis or a final supporting point.",
    dos: [
      "Rebuild OG's key arguments before adding new material.",
      "Prove why LO's counter-proposal is either worse or non-comparative.",
      "Cement why OG wins the opening half of the table."
    ],
    donts: [
      "Do not abandon PM's model or change the definition.",
      "Do not just repeat PM's speech word-for-word."
    ]
  },
  dlo: {
    title: "Deputy Leader of Opposition (DLO)",
    team: "Opening Opposition (OO)",
    duty: "Rebuts DPM and PM, reinforces LO constructive arguments, and secures OO's victory over the entire opening half.",
    dos: [
      "Synthesize the key clashes of the top half of the table.",
      "Demonstrate why OO's harms outweigh OG's speculative benefits.",
      "Take at least 1 POI from Closing Government."
    ],
    donts: [
      "Do not introduce a whole new counter-model at DLO stage.",
      "Do not ignore CG's points during POIs."
    ]
  },
  mg: {
    title: "Member of Government (MG)",
    team: "Closing Government (CG)",
    duty: "Delivers the Extension! Must bring new analytical depth, new stakeholder perspectives, or a vertical mechanistic breakthrough while remaining consistent with OG.",
    dos: [
      "Deliver a clear, distinct Extension within the first 2-3 minutes.",
      "Explain why CG's extension is the decisive, most impactful reason to pass the motion.",
      "Engage directly with Opening Opposition's strongest lines."
    ],
    donts: [
      "NEVER KNIFE OG! Do not contradict Opening Government's core stance.",
      "Do not just rehash OG's arguments in different vocabulary."
    ]
  },
  mo: {
    title: "Member of Opposition (MO)",
    team: "Closing Opposition (CO)",
    duty: "Delivers the Closing Opposition Extension! Attacks CG's extension, engages OG, and introduces CO's unique philosophy or stakeholder harm.",
    dos: [
      "Introduce CO's unique extension points with clear weighing.",
      "Clash directly with the new claims brought by the Member of Government.",
      "Establish CO's unique comparative advantage over OO."
    ],
    donts: [
      "Do not knife Opening Opposition.",
      "Do not leave the extension until the 6th minute."
    ]
  },
  gw: {
    title: "Government Whip (GW)",
    team: "Closing Government (CG)",
    duty: "Weighs the debate thematically through 2-3 major clashes, proves why CG's extension beats both Opposition teams and OG.",
    dos: [
      "Synthesize the debate through high-level comparative clashes.",
      "Weigh CG's extension as the crucial tipping point of the round.",
      "Take 1 POI from Closing Opposition."
    ],
    donts: [
      "STRICT GOLDEN RULE: ZERO NEW ARGUMENTS! Whips cannot introduce new substantive points.",
      "Do not spend the entire speech only rebutting without thematic weighing."
    ]
  },
  ow: {
    title: "Opposition Whip (OW)",
    team: "Closing Opposition (CO)",
    duty: "The final speech of the debate! Provides ultimate thematic adjudication weighing, defends CO extension, and proves why CO wins the room.",
    dos: [
      "Summarize the entire debate under clear comparative metrics.",
      "Show why CO's extension took down CG and proved greater harms than OO.",
      "End with a commanding, authoritative round summary."
    ],
    donts: [
      "ABSOLUTELY NO NEW SUBSTANTIVE MATTER! Strictly forbidden in BP rules.",
      "Do not ignore CG's whip clash."
    ]
  }
};

function selectBpRole(roleKey) {
  const r = bpRolesMasterclass[roleKey];
  if (!r) return;

  const titleEl = document.getElementById("roleGuideTitle");
  const teamEl = document.getElementById("roleGuideTeam");
  const dutyEl = document.getElementById("roleGuideDuty");
  const dosEl = document.getElementById("roleGuideDos");
  const dontsEl = document.getElementById("roleGuideDonts");

  if (titleEl) titleEl.textContent = r.title;
  if (teamEl) teamEl.textContent = r.team;
  if (dutyEl) dutyEl.textContent = r.duty;
  if (dosEl) dosEl.innerHTML = r.dos.map(d => `<li>✅ ${d}</li>`).join("");
  if (dontsEl) dontsEl.innerHTML = r.donts.map(d => `<li>❌ ${d}</li>`).join("");

  document.querySelectorAll(".bp-role-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.role === roleKey);
  });
}
window.selectBpRole = selectBpRole;

// ==========================================================================
// SEARCHABLE BILINGUAL BP GLOSSARY (EN / FR)
// ==========================================================================
const bpGlossaryItems = [
  {
    term: "Extension",
    type: "Closing Half",
    defEn: "New substantive arguments, new stakeholder mechanisms, or deeper analytical justification brought by the Member (MG or MO) in the closing half.",
    defFr: "Nouveaux arguments de fond, nouveaux mécanismes ou approfondissement analytique apporté par le Membre (MG ou MO) en seconde moitié de table.",
    tip: "Essential for CG and CO. Without an extension, you cannot beat your opening team."
  },
  {
    term: "Point of Information (POI)",
    type: "Chamber Interjection",
    defEn: "A concise 15-second interjection or question offered by the opposing bench between the 1st and 6th minute of a speech.",
    defFr: "Une intervention ou question concise de 15 secondes maximum posée par le camp adverse entre la 1ère et la 6ème minute du discours.",
    tip: "Every debater should offer POIs consistently and accept 1 to 2 POIs during their own speech."
  },
  {
    term: "Knifing",
    type: "Rule Violation",
    defEn: "When a closing team (CG or CO) contradicts or disowns the framework, definitions, or core case of their opening team.",
    defFr: "Lorsqu'une équipe de fermeture (CG ou CO) contredit ou désavoue le cadre ou les arguments de son équipe d'ouverture.",
    tip: "Strictly penalized in BP adjudication! Always build upon opening's foundation without contradicting it."
  },
  {
    term: "Fiat",
    type: "Debate Convention",
    defEn: "The theoretical assumption that if the government passes a policy motion, the proposed law or action will be enacted without parliamentary obstruction.",
    defFr: "L'hypothèse selon laquelle si le gouvernement propose une motion de politique, elle sera adoptée et mise en application.",
    tip: "Opposition cannot argue 'the government won't pass this bill' — clash on the consequences after implementation."
  },
  {
    term: "Framing & Characterization",
    type: "Strategy",
    defEn: "Setting the lens, context, and stakeholder realities through which the adjudicator evaluates which impacts are most plausible and urgent.",
    defFr: "Définir le contexte et les réalités des parties prenantes permettant aux juges d'évaluer les impacts les plus urgents.",
    tip: "He who wins the framing usually wins the round."
  },
  {
    term: "Whip Restrictions",
    type: "Rule Requirement",
    defEn: "The absolute prohibition against introducing new constructive arguments during Government Whip (GW) or Opposition Whip (OW) speeches.",
    defFr: "L'interdiction formelle d'introduire de nouveaux arguments de fond lors des discours des Whips (GW ou OW).",
    tip: "Whips must weigh existing arguments and prove why their extension wins the round."
  },
  {
    term: "Comparative & Delta",
    type: "Adjudication Metric",
    defEn: "The net difference (delta) between the world of Government and the world of Opposition. Debaters must prove why their side creates better outcomes.",
    defFr: "La différence nette (delta) entre le monde proposé par le Gouvernement et celui de l'Opposition.",
    tip: "Don't just prove a problem exists; prove why your world improves it comparatively."
  },
  {
    term: "Squirreling",
    type: "Invalid Definition",
    defEn: "Illegitimately restricting or twisting a motion's definition to avoid the core clash or debate a trivial, uncompetitive sub-issue.",
    defFr: "Restreindre ou détourner illégitimement la définition de la motion pour éviter le débat principal.",
    tip: "Debate the motion in the spirit it was set by the Adjudication Core."
  }
];

function renderBpGlossary(items) {
  const container = document.getElementById("bpGlossaryGrid");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--muted);">No matching BP debate terms found.</p>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="glossary-card">
      <h4>
        <span>${escapeHtml(item.term)}</span>
        <span class="glossary-type">${escapeHtml(item.type)}</span>
      </h4>
      <p>${currentLang === 'fr' ? escapeHtml(item.defFr) : escapeHtml(item.defEn)}</p>
      <div class="glossary-tip">💡 ${escapeHtml(item.tip)}</div>
    </article>
  `).join("");
}

function searchBpGlossary(query) {
  const q = String(query || "").toLowerCase().trim();
  const filtered = bpGlossaryItems.filter(item => 
    item.term.toLowerCase().includes(q) ||
    item.type.toLowerCase().includes(q) ||
    item.defEn.toLowerCase().includes(q) ||
    item.defFr.toLowerCase().includes(q)
  );
  renderBpGlossary(filtered);
}
window.searchBpGlossary = searchBpGlossary;

// Initialize Glossary and Motion on page load
document.addEventListener("DOMContentLoaded", () => {
  renderBpGlossary(bpGlossaryItems);
  getRandomMotion();
  selectBpRole('pm');
  updateTimerDisplay();
  updatePrepDisplay();
});
renderBpGlossary(bpGlossaryItems);

// ==========================================================================
// PWA SERVICE WORKER REGISTRATION
// ==========================================================================
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      console.log('Debate Club PWA ServiceWorker active');
    }).catch((err) => {
      console.log('Debate Club PWA ServiceWorker skipped:', err);
    });
  });
}

// PWA Installation Handler
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('pwaInstallBanner');
  if (banner) {
    banner.style.display = 'flex';
  }
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        showToast('Thank you for installing BIAKA Debate Club App! 🎉', 'success');
      }
      deferredPrompt = null;
      const banner = document.getElementById('pwaInstallBanner');
      if (banner) banner.style.display = 'none';
    });
  }
}
window.installPWA = installPWA;


