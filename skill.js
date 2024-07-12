document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  let lastScrollTop = 0;

  function animateBars() {
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage;
    });
  }

  function slideOutBars() {
    skillBars.forEach(bar => {
      bar.style.transform = 'translateX(100%)';
    });
  }

  function slideInBars() {
    skillBars.forEach(bar => {
      bar.style.transform = 'translateX(0)';
    });
  }

  window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      if (currentScrollTop + window.innerHeight >= document.body.offsetHeight / 5) {
        animateBars();
      }
      if (currentScrollTop + window.innerHeight >= document.body.offsetHeight * 0.75) {
        slideOutBars();
      }
    } else {
      // Scrolling up
      if (currentScrollTop + window.innerHeight < document.body.offsetHeight * 0.75) {
        slideInBars();
      }
    }

    lastScrollTop = currentScrollTop;
  });
});
