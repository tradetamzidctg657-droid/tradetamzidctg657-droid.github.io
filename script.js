// ============================================
// TAMZID HOSSAIN FAISAL — Portfolio JavaScript
// ============================================
// This file has 3 simple features:
// 1. Scroll reveal — elements fade in as you scroll
// 2. Skill bars   — progress bars animate when visible
// 3. Active nav   — highlights current section in navbar
// ============================================


// ============================================
// 1. SCROLL REVEAL
// Adds the "visible" class to elements with
// class "reveal" when they enter the screen
// ============================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, index) {
    if (entry.isIntersecting) {
      // Small delay between each card so they appear one by one
      setTimeout(function() {
        entry.target.classList.add('visible');
      }, index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(function(el) {
  revealObserver.observe(el);
});


// ============================================
// 2. SKILL BARS ANIMATION
// Animates the skill bars from 0% to their
// real width when they scroll into view
// ============================================
const skillBars = document.querySelectorAll('.skill-bar');

// First set all bars to 0 width
skillBars.forEach(function(bar) {
  bar.style.width = '0%';
});

const barObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const targetWidth = bar.getAttribute('data-width');
      // Animate to the real width
      setTimeout(function() {
        bar.style.width = targetWidth + '%';
      }, 200);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(function(bar) {
  barObserver.observe(bar);
});


// ============================================
// 3. ADD REVEAL CLASS TO ALL SECTIONS
// This makes all cards and sections animate
// in when the page scrolls to them
// ============================================
const animateItems = document.querySelectorAll(
  '.project-card, .skill-item, .info-card, .service-card, .contact-item, .contact-cta, .about-text, .about-cards, .hero-text, .hero-image'
);

animateItems.forEach(function(item) {
  item.classList.add('reveal');
  revealObserver.observe(item);
});


// ============================================
// 4. SMOOTH ACTIVE NAV LINK
// Highlights the nav link of the section
// you are currently reading
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + currentSection) {
      link.style.color = '#2563eb'; // blue color for active link
    }
  });
});
