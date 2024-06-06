document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path
    var path = window.location.pathname;

    // Get all nav links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through each nav link
    navLinks.forEach(function(navLink) {
        // Check if the href attribute matches the current URL path
        if (navLink.getAttribute('href') === path) {
            // Add the 'active' class to the matching nav link
            navLink.classList.add('active');
        } 
        // else {
        //     // Remove the 'active' class from all other nav links
        //     navLink.classList.remove('active');
        // }
    });
});

