document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
  
    function animateBars() {
      skillBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage;
      });
    }
  
    function slideOutBars() {
      skillBars.forEach(bar => {
        bar.style.animation = 'slideOutRight 2s forwards';
      });
    }
  
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight / 2) {
        animateBars();
      }
  
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight * 0.75) {
        slideOutBars();
      }
    });
  });
  