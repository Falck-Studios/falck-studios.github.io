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

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const fields = {
      name: contactForm.querySelector('#contact-name'),
      email: contactForm.querySelector('#contact-email'),
      subject: contactForm.querySelector('#contact-subject'),
      message: contactForm.querySelector('#contact-message'),
    };

    function showError(input, message) {
      const error = input.parentElement.querySelector('.contact-form__error');
      input.classList.add('contact-form__input--invalid');
      if (error) error.textContent = message;
    }

    function clearError(input) {
      const error = input.parentElement.querySelector('.contact-form__error');
      input.classList.remove('contact-form__input--invalid');
      if (error) error.textContent = '';
    }

    // Clear errors on input
    Object.values(fields).forEach((input) => {
      if (input) input.addEventListener('input', () => clearError(input));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Validate name
      if (!fields.name.value.trim()) {
        showError(fields.name, 'Vennligst oppgi navnet ditt.');
        valid = false;
      } else {
        clearError(fields.name);
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fields.email.value.trim()) {
        showError(fields.email, 'Vennligst oppgi e-postadressen din.');
        valid = false;
      } else if (!emailPattern.test(fields.email.value.trim())) {
        showError(fields.email, 'Vennligst oppgi en gyldig e-postadresse.');
        valid = false;
      } else {
        clearError(fields.email);
      }

      // Validate message
      if (!fields.message.value.trim()) {
        showError(fields.message, 'Vennligst skriv en melding.');
        valid = false;
      } else {
        clearError(fields.message);
      }

      if (!valid) return;

      // Build mailto link
      const to = 'kontakt@falckstudios.no';
      const subject = fields.subject.value.trim() || 'Henvendelse fra nettsiden';
      const body = `Navn: ${fields.name.value.trim()}\nE-post: ${fields.email.value.trim()}\n\n${fields.message.value.trim()}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    });
  }
});
