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
    'nav.blog': 'Blogg',
    'nav.contact': 'Kontakt',
    'nav.toggleOpen': 'Åpne meny',
    'nav.toggleClose': 'Lukk meny',
    'nav.skipLink': 'Hopp til innhold',

    // Hero
    'hero.tagline': 'Vi bygger fremtidens digitale løsninger',
    'hero.subtitle': 'AI · Software · Kreative Prosjekter',
    'hero.ctaPrimary': 'Ta kontakt',
    'hero.ctaSecondary': 'Utforsk tjenester →',

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

    // Privacy Policy
    'privacy.title': 'Personvernerklæring',
    'privacy.updated': 'Sist oppdatert: 1. april 2026',
    'privacy.intro.heading': 'Introduksjon',
    'privacy.intro.p1': 'Falck Studios AS (org.nr 837 347 602) er behandlingsansvarlig for behandlingen av personopplysninger som beskrevet i denne personvernerklæringen. Vi er forpliktet til å beskytte ditt personvern og behandle personopplysningene dine i samsvar med personopplysningsloven og EUs personvernforordning (GDPR).',
    'privacy.intro.p2': 'Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjon når du besøker nettsiden vår.',
    'privacy.controller.heading': 'Behandlingsansvarlig',
    'privacy.controller.p1': 'Falck Studios AS er behandlingsansvarlig for selskapets behandling av personopplysninger.',
    'privacy.controller.company': 'Selskap: Falck Studios AS',
    'privacy.controller.org': 'Org.nr: 837 347 602',
    'privacy.controller.location': 'Lokasjon: Bergen, Norge',
    'privacy.collect.heading': 'Hvilke opplysninger samler vi inn?',
    'privacy.collect.p1': 'Vår nettside er en statisk informasjonsside. Vi samler inn minimalt med personopplysninger:',
    'privacy.collect.item1': 'Kontaktinformasjon: Dersom du kontakter oss via e-post, lagrer vi e-postadressen din og innholdet i henvendelsen for å kunne svare deg.',
    'privacy.collect.item2': 'Teknisk informasjon: Nettsiden er hostet på GitHub Pages, som kan samle inn standard serverlogger (IP-adresser, nettlesertype, tidspunkt for besøk). Denne informasjonen behandles av GitHub i henhold til deres personvernerklæring.',
    'privacy.purpose.heading': 'Formål med behandlingen',
    'privacy.purpose.p1': 'Vi behandler personopplysninger for følgende formål:',
    'privacy.purpose.item1': 'Besvare henvendelser sendt til oss via e-post',
    'privacy.purpose.item2': 'Drift og vedlikehold av nettsiden',
    'privacy.purpose.item3': 'Forbedring av brukeropplevelsen på nettsiden',
    'privacy.legal.heading': 'Rettslig grunnlag',
    'privacy.legal.p1': 'Behandlingen av personopplysninger er basert på følgende rettslige grunnlag i henhold til GDPR:',
    'privacy.legal.item1': 'Berettiget interesse (Art. 6(1)(f)): Vi har en berettiget interesse i å drifte og vedlikeholde nettsiden vår.',
    'privacy.legal.item2': 'Samtykke (Art. 6(1)(a)): Når du kontakter oss via e-post, gir du samtykke til at vi behandler kontaktinformasjonen din for å besvare henvendelsen.',
    'privacy.cookies.heading': 'Informasjonskapsler (cookies)',
    'privacy.cookies.p1': 'Vår nettside bruker kun lokalt lagrede preferanser (localStorage) for å huske ditt språkvalg. Dette er nødvendig for nettsidens funksjonalitet og inneholder ingen personopplysninger. Vi bruker ikke sporingskapsler eller tredjeparts analyseverktøy.',
    'privacy.thirdparty.heading': 'Tredjeparter',
    'privacy.thirdparty.p1': 'Nettsiden bruker følgende tredjepartstjenester:',
    'privacy.thirdparty.item1': 'GitHub Pages: Hosting av nettsiden. GitHub kan samle inn teknisk informasjon i henhold til GitHubs personvernerklæring.',
    'privacy.thirdparty.item2': 'Google Fonts: Skrifttyper lastes fra Googles servere. Google kan samle inn teknisk informasjon i henhold til Googles personvernerklæring.',
    'privacy.rights.heading': 'Dine rettigheter',
    'privacy.rights.p1': 'I henhold til GDPR har du følgende rettigheter:',
    'privacy.rights.item1': 'Innsyn: Du har rett til å få vite hvilke personopplysninger vi har om deg.',
    'privacy.rights.item2': 'Retting: Du har rett til å kreve at feilaktige opplysninger rettes.',
    'privacy.rights.item3': 'Sletting: Du har rett til å kreve at personopplysninger slettes.',
    'privacy.rights.item4': 'Dataportabilitet: Du har rett til å motta dine personopplysninger i et strukturert format.',
    'privacy.rights.item5': 'Innsigelse: Du har rett til å protestere mot behandling basert på berettiget interesse.',
    'privacy.rights.p2': 'For å utøve dine rettigheter, kontakt oss på kontakt@falckstudios.no.',
    'privacy.complaints.heading': 'Klager',
    'privacy.complaints.p1': 'Dersom du mener at vår behandling av personopplysninger ikke stemmer overens med det vi har beskrevet her, eller at vi på andre måter bryter personvernlovgivningen, kan du klage til Datatilsynet.',
    'privacy.changes.heading': 'Endringer',
    'privacy.changes.p1': 'Vi kan oppdatere denne personvernerklæringen ved behov. Eventuelle endringer vil bli publisert på denne siden med oppdatert dato.',
  },
  en: {
    // Meta
    'meta.title': 'Falck Studios — AI, Software & Creative Solutions',
    'meta.description': 'Falck Studios delivers AI solutions, custom software, and creative digital services. We help businesses innovate and grow through technology.',

    // Navigation
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.toggleOpen': 'Open menu',
    'nav.toggleClose': 'Close menu',
    'nav.skipLink': 'Skip to content',

    // Hero
    'hero.tagline': 'We build the digital solutions of tomorrow',
    'hero.subtitle': 'AI · Software · Creative Projects',
    'hero.ctaPrimary': 'Get in touch',
    'hero.ctaSecondary': 'Explore services →',

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

    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.updated': 'Last updated: April 1, 2026',
    'privacy.intro.heading': 'Introduction',
    'privacy.intro.p1': 'Falck Studios AS (org. no. 837 347 602) is the data controller for the processing of personal data as described in this privacy policy. We are committed to protecting your privacy and processing your personal data in accordance with the Norwegian Personal Data Act and the EU General Data Protection Regulation (GDPR).',
    'privacy.intro.p2': 'This privacy policy explains how we collect, use, and protect information when you visit our website.',
    'privacy.controller.heading': 'Data Controller',
    'privacy.controller.p1': 'Falck Studios AS is the data controller for the company\'s processing of personal data.',
    'privacy.controller.company': 'Company: Falck Studios AS',
    'privacy.controller.org': 'Org. no.: 837 347 602',
    'privacy.controller.location': 'Location: Bergen, Norway',
    'privacy.collect.heading': 'What information do we collect?',
    'privacy.collect.p1': 'Our website is a static information site. We collect minimal personal data:',
    'privacy.collect.item1': 'Contact information: If you contact us via email, we store your email address and the content of your inquiry in order to respond to you.',
    'privacy.collect.item2': 'Technical information: The website is hosted on GitHub Pages, which may collect standard server logs (IP addresses, browser type, time of visit). This information is processed by GitHub in accordance with their privacy statement.',
    'privacy.purpose.heading': 'Purpose of processing',
    'privacy.purpose.p1': 'We process personal data for the following purposes:',
    'privacy.purpose.item1': 'Responding to inquiries sent to us via email',
    'privacy.purpose.item2': 'Operation and maintenance of the website',
    'privacy.purpose.item3': 'Improving the user experience on the website',
    'privacy.legal.heading': 'Legal basis',
    'privacy.legal.p1': 'The processing of personal data is based on the following legal grounds under the GDPR:',
    'privacy.legal.item1': 'Legitimate interest (Art. 6(1)(f)): We have a legitimate interest in operating and maintaining our website.',
    'privacy.legal.item2': 'Consent (Art. 6(1)(a)): When you contact us via email, you consent to our processing of your contact information to respond to your inquiry.',
    'privacy.cookies.heading': 'Cookies',
    'privacy.cookies.p1': 'Our website only uses locally stored preferences (localStorage) to remember your language choice. This is necessary for the website\'s functionality and contains no personal data. We do not use tracking cookies or third-party analytics tools.',
    'privacy.thirdparty.heading': 'Third parties',
    'privacy.thirdparty.p1': 'The website uses the following third-party services:',
    'privacy.thirdparty.item1': 'GitHub Pages: Website hosting. GitHub may collect technical information in accordance with GitHub\'s privacy statement.',
    'privacy.thirdparty.item2': 'Google Fonts: Fonts are loaded from Google\'s servers. Google may collect technical information in accordance with Google\'s privacy policy.',
    'privacy.rights.heading': 'Your rights',
    'privacy.rights.p1': 'Under the GDPR, you have the following rights:',
    'privacy.rights.item1': 'Access: You have the right to know what personal data we hold about you.',
    'privacy.rights.item2': 'Rectification: You have the right to request that incorrect data be corrected.',
    'privacy.rights.item3': 'Erasure: You have the right to request that personal data be deleted.',
    'privacy.rights.item4': 'Data portability: You have the right to receive your personal data in a structured format.',
    'privacy.rights.item5': 'Objection: You have the right to object to processing based on legitimate interest.',
    'privacy.rights.p2': 'To exercise your rights, contact us at kontakt@falckstudios.no.',
    'privacy.complaints.heading': 'Complaints',
    'privacy.complaints.p1': 'If you believe that our processing of personal data does not comply with what we have described here, or that we are otherwise in breach of privacy legislation, you may file a complaint with the Norwegian Data Protection Authority (Datatilsynet).',
    'privacy.changes.heading': 'Changes',
    'privacy.changes.p1': 'We may update this privacy policy as needed. Any changes will be published on this page with an updated date.',
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
