const header = document.querySelector('.site-header');
const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Scroll-reveal with stagger for grouped siblings */
const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = el.parentElement ? el.parentElement.querySelectorAll(':scope > [data-reveal]') : [];
        if (siblings.length > 1) {
          const idx = Array.from(siblings).indexOf(el);
          el.style.transitionDelay = (idx * 80) + 'ms';
        }
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

/* Phone screenshot carousel (Gridlock page) */
(function initCarousel() {
  const slides = document.querySelectorAll('.gl-phone-slide');
  const dots = document.querySelectorAll('.gl-phone-dot');
  if (!slides.length) return;
  let current = 0;
  let timer;
  const show = (i) => {
    slides.forEach((s) => s.classList.remove('gl-phone-slide--active'));
    dots.forEach((d) => d.classList.remove('gl-phone-dot--active'));
    slides[i].classList.add('gl-phone-slide--active');
    if (dots[i]) dots[i].classList.add('gl-phone-dot--active');
    current = i;
  };
  const next = () => show((current + 1) % slides.length);
  const startAuto = () => { timer = setInterval(next, 4000); };
  const stopAuto = () => clearInterval(timer);
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      stopAuto();
      show(parseInt(dot.dataset.slide, 10));
      startAuto();
    });
  });
  startAuto();
})();
