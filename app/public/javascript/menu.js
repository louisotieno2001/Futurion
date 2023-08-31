const menuIcon = document.getElementById('menu_icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuItems.classList.toggle('active'); // Toggle the active class on the menu items

    // Check if menu items are active
    if (menuItems.classList.contains('active')) {
        menuItems.style.opacity = '1'; // Make menu items visible
    } else {
        menuItems.style.opacity = '0'; // Hide menu items
    }
});


// Get the menu element
const menu = document.querySelector('.menu');

// Function to toggle the sticky class
function toggleSticky() {
    if (window.scrollY > 0) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', toggleSticky);
  