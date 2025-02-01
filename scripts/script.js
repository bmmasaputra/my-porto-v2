function toggleMenu() {
    var menu = document.getElementById('side-menu');
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
}

window.addEventListener('resize', checkViewportSize);
window.addEventListener('load', checkViewportSize);

function checkViewportSize() {
    const dekstop = document.querySelector('.dekstop');
    const mobile = document.querySelector('.mobile');
    
    if (window.innerWidth > 1074) {
        dekstop.style.display = 'flex'; // Show full navbar for larger screens
        mobile.style.display = 'none';  // Hide mobile icon
        document.getElementById('side-menu').style.left = '-250px'; // Hide side menu
    } else {
        dekstop.style.display = 'none'; // Hide navbar items for small screens
        mobile.style.display = 'flex';  // Show mobile icon
    }
}

// Initial check when page loads
checkViewportSize();

// Active links
let sections = document.querySelectorAll('main article, header article');
let navLinks = document.querySelectorAll('.nav-link');

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (window.scrollY >= (section.offsetTop - 200)) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    if (link.href.includes(currentSection)) {
      document.querySelector('.nav-active').classList.remove('nav-active');
      link.classList.add('nav-active');
    }
  });
});

// Chage navbar color
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav.dekstop'); // Ensure you are targeting the correct element
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if the user has scrolled down more than 50px
    if (scrollPosition > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
