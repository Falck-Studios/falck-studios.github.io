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
});
