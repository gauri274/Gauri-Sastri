// JavaScript for interactive behavior
function showAlert(projectName) {
  // Apply fade effect to the project circle when clicked
  const projectCircle = document.querySelector(`#${projectName.toLowerCase().replace(/\s+/g, '')}`);
  projectCircle.style.animation = 'fadeOut 1s forwards';

  setTimeout(() => {
      alert(`You clicked on the ${projectName} project.`);
      projectCircle.style.animation = ''; // Reset animation
  }, 1000); // Delay alert to show the fade-out effect
}

// Add smooth scrolling to the page for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
