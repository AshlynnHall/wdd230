const menuHideButton = document.querySelector('.menu-hide');
const menuShowButton = document.querySelector('.menu-show');
const navMenu = document.getElementById('nav-menu');

menuShowButton.addEventListener('click', () => {
    navMenu.classList.add('showing');
    menuShowButton.classList.remove('showing');
    menuHideButton.classList.add('showing');
});

menuHideButton.addEventListener('click', () => {
    navMenu.classList.remove('showing');
    menuShowButton.classList.add('showing');
    menuHideButton.classList.remove('showing');
});