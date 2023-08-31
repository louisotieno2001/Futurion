function toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Store the theme preference in localStorage
    const isDarkThemeEnabled = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkThemeEnabled);
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkThemeEnabled = localStorage.getItem('darkTheme') === 'true';
    const body = document.body;

    if (isDarkThemeEnabled) {
        body.classList.add('dark-theme');
    }
});

const togglerButtons = document.querySelectorAll('#theme-toggler');
togglerButtons.forEach(button => {
    button.addEventListener('click', toggleDarkTheme);
});
