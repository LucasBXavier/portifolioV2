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