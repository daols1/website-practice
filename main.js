// Loading
let load = document.getElementById('load')
let body = document.querySelector('body')
let mobileMenu = document.getElementById('hamburger')
let navBar = document.querySelector('.nav-bar')
let mobileMenuCancel = document.getElementById('cancel')
// mobileMenu.style.display = 'none';

body.style.display = 'none';
window.scrollTo(0, 0)
load.style.visibility = 'visible';

setTimeout(() => {
    load.style.display = 'none';
    body.style.visibility = 'visible';
}, 3000);
body.style.display = 'block';
mobileMenu.addEventListener('click', () => {
    navBar.style.visibility = 'visible';
    navBar.style.animation = 'enter 5s';
})

mobileMenuCancel.addEventListener('click', () => {
    navBar.style.visibility = 'hidden';
})