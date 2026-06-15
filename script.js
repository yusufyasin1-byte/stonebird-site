/* ════════════════════════════════════════════
   HEADER SCROLL STATE
   ════════════════════════════════════════════ */
const header = document.querySelector('.site-header');
const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

/* ════════════════════════════════════════════
   DYNAMIC YEAR
   ════════════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ════════════════════════════════════════════
   MOBILE MENU
   ════════════════════════════════════════════ */
(function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');
  const nav = document.getElementById('site-nav');
  if (!toggle || !overlay || !nav) return;

  // Clone nav links into overlay
  const links = nav.querySelectorAll('a');
  links.forEach(function(link) {
    const clone = link.cloneNode(true);
    overlay.appendChild(clone);
  });

  const overlayLinks = overlay.querySelectorAll('a');

  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click
  overlayLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();

/* ════════════════════════════════════════════
   SCROLL-REVEAL WITH STAGGER
   ════════════════════════════════════════════ */
const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = el.parentElement
          ? el.parentElement.querySelectorAll(':scope > [data-reveal]')
          : [];
        if (siblings.length > 1) {
          const idx = Array.from(siblings).indexOf(el);
          el.style.transitionDelay = (idx * 80) + 'ms';
        }
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealItems.forEach(function(item) { observer.observe(item); });
} else {
  revealItems.forEach(function(item) { item.classList.add('is-visible'); });
}

/* ════════════════════════════════════════════
   PHONE SCREENSHOT CAROUSEL (Gridlock page)
   ════════════════════════════════════════════ */
(function initCarousel() {
  const slides = document.querySelectorAll('.gl-phone-slide');
  const dots = document.querySelectorAll('.gl-phone-dot');
  if (!slides.length) return;
  var current = 0;
  var timer;
  var show = function(i) {
    slides.forEach(function(s) { s.classList.remove('gl-phone-slide--active'); });
    dots.forEach(function(d) { d.classList.remove('gl-phone-dot--active'); });
    slides[i].classList.add('gl-phone-slide--active');
    if (dots[i]) dots[i].classList.add('gl-phone-dot--active');
    current = i;
  };
  var next = function() { show((current + 1) % slides.length); };
  var startAuto = function() { timer = setInterval(next, 4000); };
  var stopAuto = function() { clearInterval(timer); };
  dots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      stopAuto();
      show(parseInt(dot.dataset.slide, 10));
      startAuto();
    });
  });
  startAuto();
})();
