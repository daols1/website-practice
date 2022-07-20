// Loading
let load = document.getElementById('load')
let body = document.querySelector('body')
let mobileMenu = document.getElementById('hamburger')
let navBar = document.querySelector('.nav-bar')
let mobileMenuCancel = document.getElementById('cancel')
const slide1 = document.querySelector('.slide-1')
const slide2 = document.querySelector('.slide-2')
const slide3 = document.querySelector('.slide-2')
const arrowLeft = document.querySelector('.arr-l')
const arrowRight = document.querySelector('.arr-r')
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

// slide1.style.display = 'none';
// slide2.style.display = 'none';
// slide3.style.display = 'none';

// let currentClick = 0 
// scrollArr.forEach(currentClick+= scrollArr[currentClick])

arrowLeft.addEventListener('click', () => {
    scroll(currentClick)
    slide1.style.display = 'none';
    slide2.style.display = 'grid';
})

let currentClick = 0

function scroll(currentClick){
    let scrollArr = [slide1, slide2, slide3]
    let clicker = scrollArr[currentClick]
    if (clicker !== 3){
        clicker++
    } else{
        console.log('wow you just did rubbish')
    }
}