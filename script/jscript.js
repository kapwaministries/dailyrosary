document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('bd-theme');
    const themeIcon = document.getElementById('theme-icon');
    
    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', savedTheme);
    themeIcon.querySelector('use').setAttribute('href', savedTheme === 'dark' ? '#moon-stars-fill' : '#sun-fill');
    
    themeButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-bs-theme', newTheme);
        themeIcon.querySelector('use').setAttribute('href', newTheme === 'dark' ? '#moon-stars-fill' : '#sun-fill');
        localStorage.setItem('theme', newTheme);
    });
});