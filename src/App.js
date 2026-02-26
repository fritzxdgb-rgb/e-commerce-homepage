/* ============================================================
   MAISON — Elegant E-Commerce  |  main.js
   ============================================================ */

'use strict';

/* ── Custom Cursor ──────────────────────────── */
const initCursor = () => {
  const cursor     = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');
  if (!cursor || !cursorRing) return;

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth-follow ring
  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  };
  animateRing();

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .cat-card, .product-card, .dot, .tab, .nav-icon, .social-link');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });
};

/* ── Sticky Nav ─────────────────────────────── */
const initNav = () => {
  const nav = document.querySelector('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
};

/* ── Scroll Reveal ──────────────────────────── */
const initReveal = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

/* ── Product Card Reveal ────────────────────── */
const initProductReveal = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.product-card');
        cards.forEach((card, i) => {
          setTimeout(() => card.classList.add('visible'), i * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const grid = document.querySelector('.products-grid');
  if (grid) observer.observe(grid);
};

/* ── Filter Tabs ────────────────────────────── */
const initTabs = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // In a real app, filter products by tab.dataset.filter
    });
  });
};

/* ── Testimonials Carousel ──────────────────── */
const initCarousel = () => {
  const testimonials = document.querySelectorAll('.testimonial');
  const dots         = document.querySelectorAll('.dot');
  if (!testimonials.length) return;

  let current = 0;
  let timer;

  const goTo = idx => {
    testimonials[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + testimonials.length) % testimonials.length;
    testimonials[current].classList.add('active');
    dots[current].classList.add('active');
  };

  const autoPlay = () => {
    timer = setInterval(() => goTo(current + 1), 5000);
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(timer);
      goTo(i);
      autoPlay();
    });
  });

  autoPlay();
};

/* ── Cart Counter ───────────────────────────── */
const initCart = () => {
  const badge     = document.querySelector('.badge');
  const addBtns   = document.querySelectorAll('.btn-add');
  if (!badge) return;

  let count = 2; // demo starting value

  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      badge.textContent = count;
      badge.style.animation = 'none';
      requestAnimationFrame(() => {
        badge.style.animation = 'badgePop 0.35s var(--ease-spring)';
      });
    });
  });
};

/* ── Newsletter Form ────────────────────────── */
const initNewsletter = () => {
  const form  = document.querySelector('.newsletter-form');
  const input = document.querySelector('.form-input');
  const btn   = document.querySelector('.btn-subscribe');
  if (!form || !input || !btn) return;

  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.borderColor = '#c04040';
      setTimeout(() => input.style.borderColor = '', 1500);
      return;
    }
    btn.textContent = 'Subscribed ✦';
    btn.style.background = 'var(--taupe)';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;
  });
};

/* ── Swatch Selection ───────────────────────── */
const initSwatches = () => {
  document.querySelectorAll('.product-swatches').forEach(group => {
    group.querySelectorAll('.swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        group.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });
  });
};

/* ── Wishlist Toggle ────────────────────────── */
const initWishlist = () => {
  document.querySelectorAll('.btn-wish').forEach(btn => {
    let liked = false;
    btn.addEventListener('click', () => {
      liked = !liked;
      const svg = btn.querySelector('svg');
      if (svg) svg.style.fill = liked ? 'var(--accent)' : 'none';
    });
  });
};

/* ── Smooth scroll for nav links ────────────── */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
};

/* ── Parallax Hero Image ─────────────────────── */
const initParallax = () => {
  const heroImg = document.querySelector('.hero-image-wrap img');
  if (!heroImg) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.25;
    heroImg.style.transform = `translateY(${y}px)`;
  }, { passive: true });
};

/* ── Marquee Pause on Hover ─────────────────── */
const initMarquee = () => {
  const marquee = document.querySelector('.marquee-inner');
  if (!marquee) return;

  const strip = marquee.closest('.marquee-strip');
  if (strip) {
    strip.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
    strip.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
  }
};

/* ── Inject badge keyframe via JS ────────────── */
const injectStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes badgePop {
      0%   { transform: scale(1); }
      50%  { transform: scale(1.4); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
};

/* ── INIT ───────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  injectStyles();
  initCursor();
  initNav();
  initReveal();
  initProductReveal();
  initTabs();
  initCarousel();
  initCart();
  initNewsletter();
  initSwatches();
  initWishlist();
  initSmoothScroll();
  initParallax();
  initMarquee();

  console.log('%cMAISON — Loaded', 'font-family:serif; font-size:1.2rem; color:#8b6f47;');
});