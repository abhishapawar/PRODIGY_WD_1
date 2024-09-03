// script.js

// Add event listener for scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Check scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


