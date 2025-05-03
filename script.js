document.addEventListener('DOMContentLoaded', function() {
    // Skills animation
    function animateSkillBars() {
      document.getElementById('html-progress').style.width = '70%';
      document.getElementById('css-progress').style.width = '75%';
      document.getElementById('js-progress').style.width = '50%';
      document.getElementById('react-progress').style.width = '60%';
      document.getElementById('nodejs-progress').style.width = '60%';
    }

     // Projects modals

     const projects = document.querySelectorAll('.project');
     const modal = document.getElementById('modal');
     const siteFrame = document.getElementById('site-frame');
     const projectName = document.getElementById('project-name')
     const projectUrl = document.getElementById('project-url')
     const closeButton = document.querySelector('.close-button');
 
     projects.forEach(project => {
       project.addEventListener('click', () => {
         const url = project.getAttribute('data-url');
         siteFrame.src = url;
         modal.style.display = "block"
         projectName.innerText = project.textContent;
         projectUrl.href = url
       })
     });
 
     closeButton.addEventListener("click", () => {
       modal.style.display = "none";
       siteFrame.src = "";
     })
 
     window.addEventListener("click", (event) => {
       if(event.target == modal) {
         modal.style.display = "none";
         siteFrame.src = "";
       }
     })

    animateSkillBars();
  });