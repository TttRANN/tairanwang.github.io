// Fade the hero out proportionally to scroll depth
const hero   = document.getElementById('hero');
const height = hero.offsetHeight;

window.addEventListener('scroll', () => {
  const opacity = 1 - (window.scrollY / height);
  hero.style.opacity = (opacity < 0 ? 0 : opacity).toFixed(2);
});
