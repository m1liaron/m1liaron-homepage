document.addEventListener('DOMContentLoaded', function() {
    // Skills animation
    function animateSkillBars() {
      document.getElementById('html-progress').style.width = '60%';
      document.getElementById('css-progress').style.width = '65%';
      document.getElementById('js-progress').style.width = '40%';
      document.getElementById('react-progress').style.width = '50%';
      document.getElementById('nodejs-progress').style.width = '50%';
    }

    animateSkillBars();
  });