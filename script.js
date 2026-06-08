// Expand / collapse project cards
document.querySelectorAll('.project-card').forEach(card => {
  const button = card.querySelector('.project-toggle');
  const details = card.querySelector('.project-details');
  const icon = card.querySelector('.expand-icon');

  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!open));
    details.hidden = open;
    card.classList.toggle('expanded', !open);
    icon.textContent = open ? '+' : '−';
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));