document.querySelector('.ham').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-sub');
    if (navLinks.style.display === 'block') {
        navLinks.style.display = 'none'; // Hide the links
    } else {
        navLinks.style.display = 'block'; // Show the links
    }
});