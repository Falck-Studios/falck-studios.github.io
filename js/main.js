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
      const lang = document.documentElement.lang || 'nb';
      const openLabel = lang === 'en' ? 'Open menu' : 'Åpne meny';
      const closeLabel = lang === 'en' ? 'Close menu' : 'Lukk meny';
      toggle.setAttribute('aria-label', isOpen ? openLabel : closeLabel);
      menu.classList.toggle('nav__menu--open', !isOpen);
    });

    // Close menu when a nav link is clicked
    menu.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        const lang = document.documentElement.lang || 'nb';
        toggle.setAttribute('aria-label', lang === 'en' ? 'Open menu' : 'Åpne meny');
        menu.classList.remove('nav__menu--open');
      });
    });
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

  // Header background on scroll
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('site-header--scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Scroll-triggered reveal animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains('reveal')) {
              el.classList.add('reveal--visible');
            }
            if (el.classList.contains('reveal-stagger')) {
              el.classList.add('reveal-stagger--visible');
            }
            revealObserver.unobserve(el);
          }
        });
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }
});
