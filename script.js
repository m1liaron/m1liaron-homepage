document.addEventListener('DOMContentLoaded', function() {
    // Skills animation
    function animateSkillBars() {
      document.getElementById('html-progress').style.width = '70%';
      document.getElementById('css-progress').style.width = '75%';
      document.getElementById('js-progress').style.width = '50%';
      document.getElementById('react-progress').style.width = '60%';
      document.getElementById('nodejs-progress').style.width = '60%';
    }

    animateSkillBars();
  });