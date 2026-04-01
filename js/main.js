// Falck Studios — Main JavaScript
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for CTA button
  const cta = document.querySelector('.hero__cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      const target = document.querySelector(cta.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Mobile menu toggle
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Åpne meny' : 'Lukk meny');
      menu.classList.toggle('nav__menu--open', !isOpen);
    });

    // Close menu when a nav link is clicked
    menu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Åpne meny');
        menu.classList.remove('nav__menu--open');
      });
    });
  }

  // Cookie consent banner
  const cookieBanner = document.getElementById('cookie-consent');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');

  if (cookieBanner && !localStorage.getItem('cookie-consent')) {
    requestAnimationFrame(() => {
      cookieBanner.classList.add('cookie-consent--visible');
      cookieBanner.setAttribute('aria-hidden', 'false');
    });
  }

  function dismissCookieBanner(choice) {
    localStorage.setItem('cookie-consent', choice);
    cookieBanner.classList.remove('cookie-consent--visible');
    cookieBanner.setAttribute('aria-hidden', 'true');
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => dismissCookieBanner('accepted'));
  }
  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => dismissCookieBanner('declined'));
  }

  // Active section highlighting on scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                'nav__link--active',
                link.getAttribute('href') === `#${entry.target.id}`
              );
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }
});
