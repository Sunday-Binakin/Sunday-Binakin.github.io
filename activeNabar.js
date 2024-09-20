const navbarLinks = document.querySelectorAll('.nav-bar a');
const sections = document.querySelectorAll('section');

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const targetSectionId = link.getAttribute('href').substring(1);   
 // Get the target section ID
    const targetSection = document.getElementById(targetSectionId);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth'   
 });

    // Activate the clicked navbar item
    navbarLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Add a function to check if the current section is visible
function isSectionVisible(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;   

}

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (isSectionVisible(section)) {
      const correspondingLink = navbarLinks.find(link => link.getAttribute('href').substring(1) === section.id);
      navbarLinks.forEach(link => link.classList.remove('active'));
      correspondingLink.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-bar ul li a');
  
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Remove active class from all links
      links.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Scroll to the target element
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});