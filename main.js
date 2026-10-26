const navigationLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const sections = navigationLinks.map((link) => document.querySelector(link.hash));

function updateNavigation() {
  const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
  let activeId = sections[0].id;

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 150) activeId = section.id;
  }
  if (atBottom) activeId = sections[sections.length - 1].id;

  for (const link of navigationLinks) {
    if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(() => {
    updateNavigation();
    scheduled = false;
  });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('hashchange', updateNavigation);
updateNavigation();
