/**
 * HAS NAA | WOMEN'S FASHION
 * Main Application Script
 * Global UI controls, mobile drawer, theme switcher (Light/Dark), scroll animations
 */

const MOON_ICON = `<svg viewBox="0 0 24 24"><path d="M12.3 2a10 10 0 0 0-.19 20 10 10 0 0 0 8.7-5.18A8.8 8.8 0 0 1 12.3 2z"/></svg>`;
const SUN_ICON = `<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm0 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm10-9h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM4 11H2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm14.07-6.07a1 1 0 0 0-1.41 0l-1.42 1.41a1 1 0 1 0 1.42 1.42l1.41-1.42a1 1 0 0 0 0-1.41zM6.34 16.24a1 1 0 0 0-1.41 1.42l1.41 1.41a1 1 0 0 0 1.42-1.41l-1.42-1.42zm12.73 2.83l-1.41-1.41a1 1 0 1 0-1.42 1.41l1.42 1.42a1 1 0 0 0 1.41-1.42zM7.76 6.34L6.34 4.93a1 1 0 0 0-1.41 1.41l1.41 1.42a1 1 0 0 0 1.42-1.42z"/></svg>`;

// Initialize theme immediately before render to avoid flash
const currentTheme = localStorage.getItem('hasnaa_theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initStickyHeader();
  initMobileDrawer();
  initNewsletter();
  initImageFallbacks();
  highlightActiveNav();
});

// 1. Theme Manager (Light & Nocturne Dark Mode)
function initThemeManager() {
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hasnaa_theme', theme);

    // Update logos across header and drawer
    document.querySelectorAll('.hn-brand-logo img, .hn-drawer-header img').forEach(img => {
      if (theme === 'dark') {
        img.src = 'brand/logos/logo-primary-dark.svg';
      } else {
        img.src = 'brand/logos/logo-primary.svg';
      }
    });

    // Update toggle buttons icons
    document.querySelectorAll('.hn-theme-btn').forEach(btn => {
      btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
      btn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    });

    window.dispatchEvent(new CustomEvent('hasnaa:themechange', { detail: { theme } }));
  };

  applyTheme(currentTheme);

  // Bind click on all theme buttons
  document.addEventListener('click', e => {
    const btn = e.target.closest('.hn-theme-btn');
    if (btn) {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    }
  });
}

// 2. Sticky Navigation Header
function initStickyHeader() {
  const header = document.querySelector('.hn-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 3. Mobile Drawer Navigation
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.hn-mobile-toggle');
  const drawer = document.querySelector('.hn-mobile-drawer');
  const closeBtn = document.querySelector('.hn-drawer-close');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  // Close on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Close on clicking links inside drawer
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });
}

// 4. Highlight Active Navigation Item
function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  document.querySelectorAll('.hn-nav-item, .hn-drawer-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    if (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path === ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 5. Newsletter Simulation
function initNewsletter() {
  const form = document.querySelector('.hn-newsletter-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value) {
      const isAr = hasnaaI18n.getLang() === 'ar';
      const msg = isAr ? 'شكراً لاشتراككِ في مجلة حسناء الخاصة.' : 'Thank you for subscribing to The Private Journal.';
      alert(msg);
      input.value = '';
    }
  });
}

// 6. High-Fashion SVG Image Fallbacks
function initImageFallbacks() {
  const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="100%" height="100%" fill="%23EFEBE4"/><circle cx="300" cy="400" r="140" fill="none" stroke="%23DCC8AC" stroke-width="1.5"/><text x="300" y="390" font-family="serif" font-size="28" fill="%236B5140" text-anchor="middle" letter-spacing="4">HAS NAA</text><text x="300" y="425" font-family="sans-serif" font-size="12" fill="%23A68B70" text-anchor="middle" letter-spacing="3">EDITORIAL ARCHIVE</text></svg>`;

  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG' && !e.target.dataset.hasFallback) {
      e.target.dataset.hasFallback = 'true';
      e.target.src = fallbackSvg;
    }
  }, true);
}
