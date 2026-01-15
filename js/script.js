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

 document.addEventListener("DOMContentLoaded", () => {
    const groups = document.querySelectorAll("[data-reveal-group]");

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const group = entry.target;
                const items = group.querySelectorAll(".reveal");

                items.forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.2}s`;
                    el.classList.add("is-visible");
                });

                obs.unobserve(group);
            });
        },
        { threshold: 0.2 }
    );

    groups.forEach(group => observer.observe(group));
});