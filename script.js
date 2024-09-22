// Smooth scrolling when a navigation link is clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scrolling
        });

        // Optionally, hide the menu on mobile after clicking a link
        var navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// Toggle navigation menu visibility on mobile when the hamburger button is clicked
document.querySelector('.menu-toggle').addEventListener('click', function() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show'); // Toggles the 'show' class

    // Optionally, toggle the hamburger animation (if you added it)
    this.classList.toggle('open'); // Add this line for animation effect
});
