const menuIcon1 = document.getElementById('menu-icon1');
const menuIcon2 = document.getElementById('menu-icon2');

const nav1 = document.getElementById('liste-1');
const nav2 = document.getElementById('liste-2');

const header_nav = document.getElementById('header_nav');

const header = document.getElementById('header');

function openMenu(){
    nav1.style.display = 'flex';
    nav2.style.display = 'flex';
    menuIcon1.style.display = 'none';
    menuIcon2.style.display = 'block';
    header_nav.style.height = '70vw';
    header.style.marginBottom = '60vw';
}

function closeMenu(){
    nav1.style.display = 'none';
    nav2.style.display = 'none';
    menuIcon1.style.display = 'block';
    menuIcon2.style.display = 'none';
    header_nav.style.height = '24vw';
    header.style.marginBottom = '0vw';
}

menuIcon1.addEventListener('click', openMenu)
menuIcon2.addEventListener('click', closeMenu)