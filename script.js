// ---- Hero typing effect ----
const roles = ['Web developer.', 'Frontend & backend.', 'Clean code, fast interfaces.'];
const typedEl = document.getElementById('typedRole');

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  typedEl.textContent = current.slice(0, charIndex);
  setTimeout(typeLoop, deleting ? 35 : 60);
}

if (typedEl) typeLoop();

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const tabs = document.getElementById('tabs');

if (navToggle && tabs) {
  navToggle.addEventListener('click', () => {
    const isOpen = tabs.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  tabs.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      tabs.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- Copy email button ----
const copyBtn = document.getElementById('copyEmail');
const emailLink = document.getElementById('emailLink');

if (copyBtn && emailLink) {
  copyBtn.addEventListener('click', async () => {
    const email = emailLink.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
      const original = copyBtn.textContent;
      copyBtn.textContent = 'copied';
      setTimeout(() => { copyBtn.textContent = original; }, 1500);
    } catch (err) {
      // Clipboard API unavailable — fail silently, link still works via click.
    }
  });
}

// ---- Footer year ----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
