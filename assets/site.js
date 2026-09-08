'use strict';

// Navigation: one accessible mobile menu, closed after following an anchor.
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu({ restoreFocus = false } = {}) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(willOpen));
  menuToggle.setAttribute('aria-label', willOpen ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !willOpen;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) closeMenu({ restoreFocus: true });
});
window.matchMedia('(min-width: 961px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// The X-ray comparison is an image illustration; the interior is conceptual.
document.querySelectorAll('[data-comparison]').forEach(comparison => {
  const range = comparison.querySelector('input[type="range"]');
  const reference = comparison.querySelector('.comparison-base');
  // Both layers share the photograph's coordinate system. Calculate the cover
  // crop once so different source resolutions cannot shift one image separately.
  const alignImagePlanes = () => {
    const referenceWidth = Number(reference.getAttribute('width'));
    const referenceHeight = Number(reference.getAttribute('height'));
    const width = comparison.clientWidth;
    const height = comparison.clientHeight;
    if (!width || !height || !referenceWidth || !referenceHeight) return;
    const scale = Math.max(width / referenceWidth, height / referenceHeight);
    const imageWidth = referenceWidth * scale;
    const imageHeight = referenceHeight * scale;
    comparison.style.setProperty('--comparison-image-width', `${imageWidth}px`);
    comparison.style.setProperty('--comparison-image-height', `${imageHeight}px`);
    comparison.style.setProperty('--comparison-image-left', `${(width - imageWidth) / 2}px`);
    comparison.style.setProperty('--comparison-image-top', `${(height - imageHeight) / 2}px`);
    // Landmark framing correction in photograph pixels, scaled with the image.
    const offsetX = Number(comparison.dataset.digitalOffsetX) || 0;
    const offsetY = Number(comparison.dataset.digitalOffsetY) || 0;
    comparison.style.setProperty('--comparison-digital-shift-x', `${offsetX * scale}px`);
    comparison.style.setProperty('--comparison-digital-shift-y', `${offsetY * scale}px`);
  };
  const updateComparison = () => {
    comparison.style.setProperty('--split', `${range.value}%`);
    range.setAttribute('aria-valuetext', `Illustrative wireframe covers ${range.value} percent`);
  };
  range.addEventListener('input', updateComparison);
  updateComparison();
  alignImagePlanes();
  if ('ResizeObserver' in window) {
    new ResizeObserver(alignImagePlanes).observe(comparison);
  } else {
    window.addEventListener('resize', alignImagePlanes, { passive: true });
  }
});

// WAI-ARIA tab interaction: click, arrows, Home and End.
const pipeline = document.querySelector('[data-pipeline]');
const tabs = [...pipeline.querySelectorAll('[role="tab"]')];
function selectTab(tab, moveFocus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (moveFocus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next], true);
    }
  });
});

// Native dialogs provide focus containment and Escape-to-close behavior.
const dialogTriggers = new Map();
document.querySelectorAll('[data-open-dialog]').forEach(button => {
  const dialog = document.getElementById(button.dataset.openDialog);
  button.addEventListener('click', () => {
    dialogTriggers.set(dialog, button);
    dialog.showModal();
  });
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => dialogTriggers.get(dialog)?.focus());
});

// Highlight the section currently in view without changing browser history.
if ('IntersectionObserver' in window) {
  const navigation = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-20% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
document.getElementById('year').textContent = String(new Date().getFullYear());
