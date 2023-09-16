function toggleDarkTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Store the theme preference in localStorage
    const isDarkThemeEnabled = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkThemeEnabled);

    // Dynamically load/unload dark theme CSS
    if (isDarkThemeEnabled) {
        loadDarkThemeCSS();
    } else {
        unloadDarkThemeCSS();
    }
}

function loadDarkThemeCSS() {
    // Check if the dark theme CSS is already loaded
    if (!document.querySelector('link[href="dark-theme.css"]')) {
        // Create a new link element for the dark theme CSS
        var darkThemeLink = document.createElement('link');
        darkThemeLink.rel = 'stylesheet';
        darkThemeLink.href = 'dark-theme.css';
        darkThemeLink.id = 'darkThemeCSS';

        // Append the dark theme CSS to the document's head
        document.head.appendChild(darkThemeLink);
    }
}

function unloadDarkThemeCSS() {
    // Remove the dark theme CSS if it's already loaded
    var existingDarkThemeLink = document.querySelector('link[href="dark-theme.css"]');
    if (existingDarkThemeLink) {
        existingDarkThemeLink.remove();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkThemeEnabled = localStorage.getItem('darkTheme') === 'true';
    const body = document.body;

    if (isDarkThemeEnabled) {
        body.classList.add('dark-theme');
        loadDarkThemeCSS();
    }
});

const togglerButtons = document.querySelectorAll('#theme-toggler');
togglerButtons.forEach(button => {
    button.addEventListener('click', toggleDarkTheme);
});
