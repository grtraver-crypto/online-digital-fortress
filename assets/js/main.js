/* ============================================================
   ONLINE DIGITAL FORTRESS — Interactions
   main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Sticky nav shadow on scroll ── */
  var nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ── Mobile hamburger menu ── */
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('nav-mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.style.display === 'block';
      mobileMenu.style.display = isOpen ? 'none' : 'block';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
      });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* ── Active nav link highlighting ── */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('#')) {
      var linkFile = href.split('/').pop();
      if (linkFile === currentPath) {
        link.style.color = 'var(--text-dark)';
        link.style.fontWeight = '600';
      }
    }
  });

})();
