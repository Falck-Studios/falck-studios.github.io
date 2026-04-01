// Falck Studios — Internationalization (i18n)
'use strict';

const translations = {
  nb: {
    // Meta (handled separately)
    'meta.title': 'Falck Studios — AI, Software & Kreative Løsninger',
    'meta.description': 'Falck Studios leverer AI-løsninger, skreddersydd programvare og kreative digitale tjenester. Vi hjelper bedrifter med å innovere og vokse gjennom teknologi.',

    // Navigation
    'nav.about': 'Om Oss',
    'nav.services': 'Tjenester',
    'nav.projects': 'Prosjekter',
    'nav.contact': 'Kontakt',
    'nav.toggleOpen': 'Åpne meny',
    'nav.toggleClose': 'Lukk meny',

    // Hero
    'hero.tagline': 'Vi bygger fremtidens digitale løsninger',
    'hero.subtitle': 'AI · Software · Kreative Prosjekter',
    'hero.cta': 'Se hva vi gjør ↓',

    // About
    'about.heading': 'Om Oss',
    'about.lead': 'Falck Studios er et teknologiselskap basert i Bergen, Norge — grunnlagt i 2026 med en visjon om å forme fremtidens digitale opplevelser.',
    'about.p1': 'Vi spesialiserer oss innen kunstig intelligens, programvareutvikling og kreative digitale prosjekter. Enten det handler om å bygge smarte løsninger, utvikle skreddersydd programvare eller skape engasjerende digitalt innhold, kombinerer vi teknisk ekspertise med kreativ tenkning.',
    'about.p2': 'Fra vår base i Bergen jobber vi med å gjøre avansert teknologi tilgjengelig og nyttig — for bedrifter, utviklere og sluttbrukere.',
    'about.valuesHeading': 'Våre Verdier',
    'about.value1.title': 'Innovasjon',
    'about.value1.text': 'Vi utforsker ny teknologi og finner kreative løsninger på komplekse utfordringer.',
    'about.value2.title': 'Kvalitet',
    'about.value2.text': 'Alt vi lager skal være gjennomtenkt, robust og bygget for å vare.',
    'about.value3.title': 'Åpenhet',
    'about.value3.text': 'Vi tror på transparens, åpen kildekode og ærlig kommunikasjon.',

    // Services
    'services.heading': 'Hva vi gjør',
    'services.ai.title': 'AI-løsninger',
    'services.ai.desc': 'Intelligente systemer, chatboter og AI-integrasjoner som gir virksomheter et forsprang.',
    'services.software.title': 'Programvare',
    'services.software.desc': 'Webapper, verktøy og automatisering — skreddersydd for dine behov.',
    'services.creative.title': 'Kreative prosjekter',
    'services.creative.desc': 'Spill, digitale produkter og innovative løsninger med unikt design.',

    // Projects
    'projects.heading': 'Prosjekter',
    'projects.subtitle': 'Utforsk produktene og prosjektene våre.',
    'projects.badge.wip': 'Under utvikling',
    'projects.status.soon': 'Kommer snart',
    'projects.visitHomepage': 'Besøk hjemmeside →',
    'projects.fecht.desc': 'AI-assistent for historisk europeisk kampsport (HEMA).',
    'projects.langapp.desc': 'Språklæringsapp for effektiv og engasjerende språktrening.',
    'projects.backstabber.desc': 'Kortspill og strategispill med unike mekanikker.',

    // Contact
    'contact.heading': 'Kontakt',
    'contact.subtitle': 'Ta gjerne kontakt med oss — vi ser frem til å høre fra deg.',
    'contact.email': 'E-post',
    'contact.github': 'GitHub',
    'contact.location': 'Lokasjon',
    'contact.locationValue': 'Bergen, Norge',

    // Footer
    'footer.privacy': 'Personvernerklæring',
  },

  en: {
    // Meta
    'meta.title': 'Falck Studios — AI, Software & Creative Solutions',
    'meta.description': 'Falck Studios delivers AI solutions, custom software, and creative digital services. We help businesses innovate and grow through technology.',

    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.toggleOpen': 'Open menu',
    'nav.toggleClose': 'Close menu',

    // Hero
    'hero.tagline': 'We build the digital solutions of tomorrow',
    'hero.subtitle': 'AI · Software · Creative Projects',
    'hero.cta': 'See what we do ↓',

    // About
    'about.heading': 'About Us',
    'about.lead': 'Falck Studios is a technology company based in Bergen, Norway — founded in 2026 with a vision to shape the future of digital experiences.',
    'about.p1': 'We specialize in artificial intelligence, software development, and creative digital projects. Whether it\'s building smart solutions, developing custom software, or creating engaging digital content, we combine technical expertise with creative thinking.',
    'about.p2': 'From our base in Bergen, we work to make advanced technology accessible and useful — for businesses, developers, and end users.',
    'about.valuesHeading': 'Our Values',
    'about.value1.title': 'Innovation',
    'about.value1.text': 'We explore new technology and find creative solutions to complex challenges.',
    'about.value2.title': 'Quality',
    'about.value2.text': 'Everything we create is thoughtful, robust, and built to last.',
    'about.value3.title': 'Openness',
    'about.value3.text': 'We believe in transparency, open source, and honest communication.',

    // Services
    'services.heading': 'What We Do',
    'services.ai.title': 'AI Solutions',
    'services.ai.desc': 'Intelligent systems, chatbots, and AI integrations that give businesses a competitive edge.',
    'services.software.title': 'Software',
    'services.software.desc': 'Web apps, tools, and automation — tailored to your needs.',
    'services.creative.title': 'Creative Projects',
    'services.creative.desc': 'Games, digital products, and innovative solutions with unique design.',

    // Projects
    'projects.heading': 'Projects',
    'projects.subtitle': 'Explore our products and projects.',
    'projects.badge.wip': 'In Development',
    'projects.status.soon': 'Coming Soon',
    'projects.visitHomepage': 'Visit homepage →',
    'projects.fecht.desc': 'AI assistant for Historical European Martial Arts (HEMA).',
    'projects.langapp.desc': 'Language learning app for effective and engaging language training.',
    'projects.backstabber.desc': 'Card game and strategy game with unique mechanics.',

    // Contact
    'contact.heading': 'Contact',
    'contact.subtitle': 'Feel free to get in touch — we look forward to hearing from you.',
    'contact.email': 'Email',
    'contact.github': 'GitHub',
    'contact.location': 'Location',
    'contact.locationValue': 'Bergen, Norway',

    // Footer
    'footer.privacy': 'Privacy Policy',
  },
};

function getPreferredLanguage() {
  const stored = localStorage.getItem('falck-lang');
  if (stored && translations[stored]) return stored;

  const browserLang = navigator.language || navigator.languages?.[0] || 'nb';
  return browserLang.startsWith('nb') || browserLang.startsWith('no') ? 'nb' : 'en';
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem('falck-lang', lang);
  document.documentElement.lang = lang === 'nb' ? 'nb' : 'en';

  // Update meta tags
  document.title = translations[lang]['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', translations[lang]['meta.description']);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', translations[lang]['meta.title']);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', translations[lang]['meta.description']);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) ogLocale.setAttribute('content', lang === 'nb' ? 'nb_NO' : 'en_US');

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', translations[lang]['meta.title']);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', translations[lang]['meta.description']);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  // Update the toggle button label
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'nb' ? 'EN' : 'NO';
    toggleBtn.setAttribute('aria-label', lang === 'nb' ? 'Switch to English' : 'Bytt til norsk');
  }

  // Update nav aria-label
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.setAttribute('aria-label', lang === 'nb' ? 'Hovednavigasjon' : 'Main navigation');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getPreferredLanguage();
  setLanguage(lang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('falck-lang') || getPreferredLanguage();
      const newLang = currentLang === 'nb' ? 'en' : 'nb';
      setLanguage(newLang);
    });
  }
});
