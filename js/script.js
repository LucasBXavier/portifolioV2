let isOffcanvasOpen = false;

function toggleOffcanvas() {
  isOffcanvasOpen = !isOffcanvasOpen;

  const offcanvas = document.getElementById('offcanvas');
  const btn = document.getElementById('offcanvas-btn');

  if (!offcanvas || !btn) return;

  if (isOffcanvasOpen) {
    offcanvas.classList.add('open');
    btn.classList.add('change');
  } else {
    offcanvas.classList.remove('open');
    btn.classList.remove('change');
  }
}

function applyReveal(group, force = false) {
  const items = group.querySelectorAll(".reveal");

  items.forEach((el, index) => {
    if (el.classList.contains("is-visible")) return;

    el.style.animationDelay = force ? "0s" : `${index * 0.2}s`;
    el.classList.add("is-visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll("[data-reveal-group]");
  const isMobile = window.innerWidth <= 768;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        applyReveal(entry.target);
      });
    },
    {
      threshold: isMobile ? 0.05 : 0.2
    }
  );

  groups.forEach(group => {
    observer.observe(group);

    if (isMobile) {
      const rect = group.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        applyReveal(group, true);
      }
    }
  });
});
