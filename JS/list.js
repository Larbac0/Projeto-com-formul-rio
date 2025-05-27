document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.collapse-toggle');

    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const parent = toggle.closest('.filter-group');
        parent.classList.toggle('active');
      });
    });
});

