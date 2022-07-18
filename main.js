// Loading
let load = document.getElementById('load')
let body = document.querySelector('body')
let mobileMenu = document.getElementById('hamburger')
let navBar = document.querySelector('.nav-bar')
let mobileMenuCancel = document.getElementById('cancel')
// mobileMenu.style.display = 'none';
body.style.visibility = 'hidden';
load.style.visibility = 'visible';
setTimeout(() => {
    load.style.display = 'none';
    body.style.visibility = 'visible';
}, 3000);
mobileMenu.addEventListener('click', () => {
    navBar.style.visibility = 'visible';
    navBar.style.animation = 'enter 5s';
})

mobileMenuCancel.addEventListener('click', () => {
    navBar.style.visibility = 'hidden';
})