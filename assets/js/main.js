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


  /* ── Audit form submission tracking ── */
  var auditForm = document.getElementById('audit-form');
  if (auditForm) {
    auditForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(auditForm);
      var body = new URLSearchParams(formData).toString();

      fetch('/.netlify/functions/audit-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
      })
        .then(function () {
          window.location.href = '/audit-thanks.html';
        })
        .catch(function () {
          window.location.href = '/audit-thanks.html';
        });
    });
  }

  /* ── Coming-soon popup on Books.by order buttons ── */
  (function () {
    var modal = document.createElement('div');
    modal.className = 'odf-modal-overlay';
    modal.innerHTML =
      '<div class="odf-modal" role="dialog" aria-modal="true" aria-labelledby="odf-modal-title">' +
      '  <button class="odf-modal-close" aria-label="Close">&times;</button>' +
      '  <p class="odf-modal-eyebrow">Online Digital Fortress</p>' +
      '  <h3 id="odf-modal-title">New Release Coming Soon</h3>' +
      '  <p>The new edition of <em>Online Digital Fortress</em> is on its way. Sign up now and you\'ll be notified the moment it\'s released.</p>' +
      '  <form id="odf-notify-form">' +
      '    <input type="email" name="email" placeholder="founder@example.com" required aria-label="Email address" />' +
      '    <button type="submit" class="btn btn-primary">Sign Up Now for Notification</button>' +
      '  </form>' +
      '  <p class="odf-modal-success" id="odf-notify-success">You\'re on the list. You\'ll be the first to know.</p>' +
      '  <p class="odf-modal-fine">No spam, ever. Unsubscribe anytime.</p>' +
      '</div>';
    document.body.appendChild(modal);

    function openModal(e) { e.preventDefault(); modal.classList.add('open'); }
    function closeModal() { modal.classList.remove('open'); }

    document.querySelectorAll('a[href*="books.by"]').forEach(function (a) {
      a.addEventListener('click', openModal);
    });
    modal.querySelector('.odf-modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

    var form = document.getElementById('odf-notify-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[name="email"]').value.trim();
      if (!email) return;
      var body = new URLSearchParams({ 'form-name': 'book-launch-notify', 'email': email }).toString();
      fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
        .then(function () {
          form.style.display = 'none';
          document.getElementById('odf-notify-success').style.display = 'block';
          setTimeout(closeModal, 3500);
        })
        .catch(function () {
          form.style.display = 'none';
          document.getElementById('odf-notify-success').style.display = 'block';
          setTimeout(closeModal, 3500);
        });
    });
  })();

})();
