document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButtons = document.querySelectorAll('[data-bs-theme-value]');

    themeToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-bs-theme-value');
            document.body.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme);

            // Update active state
            themeToggleButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-bs-theme', savedTheme);
    const activeButton = document.querySelector(`[data-bs-theme-value="${savedTheme}"]`);
    if (activeButton) activeButton.classList.add('active');
});
