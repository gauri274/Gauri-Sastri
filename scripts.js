// Smooth scrolling for navigation links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    const targetId = link.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Smooth scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Adding scroll-based animations (fade-in effect)
const sections = document.querySelectorAll('.fade-in');

function checkSections() {
  const windowHeight = window.innerHeight;
  const windowTop = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top + windowTop;
    if (windowTop + windowHeight > sectionTop + 100) {
      section.classList.add('visible'); // Add 'visible' class to trigger animation
    }
  });
}

// Call the function on scroll
window.addEventListener('scroll', checkSections);
checkSections(); // Also check initially when the page loads

// Highlight active navigation link
const navLinks = document.querySelectorAll('nav a');

function highlightActiveLink() {
  let found = false;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;

    if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionBottom - 50) {
      if (!found) {
        navLinks[index].classList.add('active');
        found = true;
      }
    } else {
      navLinks[index].classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightActiveLink);
highlightActiveLink(); // Check the active link on load

// Portfolio item click behavior (modal example or redirection)
const portfolioItems = document.querySelectorAll('.project-circle');

portfolioItems.forEach(item => {
  item.addEventListener('click', function() {
    // For example, open a modal with project details
    const projectName = item.textContent;
    alert(`You clicked on ${projectName} portfolio item!`);
    
    // Or redirect to a project-specific page
    // window.location.href = `/projects/${projectName.toLowerCase()}`;
  });
});

// Optional: Adding a "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.backgroundColor = '#FFCAD4';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; // Hidden initially

document.body.appendChild(backToTopButton);

// Show the button when scrolling down
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll back to top when the button is clicked
backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
