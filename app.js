// Select the hamburger icon and navigation links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to toggle 'active' class on click
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
