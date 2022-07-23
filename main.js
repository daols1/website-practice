// Loading
let load = document.getElementById('load')
let body = document.querySelector('body')
let mobileMenu = document.getElementById('hamburger')
let navBar = document.querySelector('.nav-bar')
let mobileMenuCancel = document.getElementById('cancel')
const slide1 = document.querySelector('.slide-1')
const slide2 = document.querySelector('.slide-2')
const slide3 = document.querySelector('.slide-3')
const arrowLeft = document.querySelector('.arr-l')
const arrowRight = document.querySelector('.arr-2')
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

// let initialClick = 0
let slides = [slide1, slide2, slide3]

console.log(arrowLeft)
console.log(arrowRight)

// arrowLeft.addEventListener('click', () => {
//     // scroll(currentClick)
//     slide1.style.display = 'none';
//     slide2.style.display = 'grid';
// })

// function clickAdder(initialClick){
//     initialClick + 1 
// }


// function showNextSlide(n, i){
//     n.forEach((i) => {
//         i++
//         n = n[i]
//     })
// }

// console.log(showNextSlide(slides, 0))


arrowLeft.addEventListener('click', () => {
    // let currentClick = showNextSlide(slides, 0)
    let i = 0
    i--
    slides = slides[i]
    if (slides == slides[0]){
        slide2.style.display = 'none';
        slide3.style.display = 'none';
        slide1.style.display = 'grid';
    }
    else if (slides == slides[1]){
        slide3.style.display = 'none';
        slide1.style.display = 'none';
        slide2.style.display = 'grid';
    }
    else{
        slide1.style.display = 'none';
        slide2.style.display = 'none';
        slide3.style.display = 'grid';
    }
})

arrowRight.addEventListener('click', (slide) => {
    // let currentClick = showNextSlide(slides, 0)
    // console.log('Event listener it self is working')
    // slides = [slide1, slide2, slide3]
    let i = [...Array(3).keys()]
    // slide = slides[i]
    for ( num of i ){
        if (num === 0){
            slide2.style.display = 'none';
            slide3.style.display = 'none';
            slide1.style.display = 'grid';
            console.log('slide-1')
        }
        else if (num === 1){
            slide3.style.display = 'none';
            slide1.style.display = 'none';
            slide2.style.display = 'grid';
            console.log('slide-2')
        }
        // else if (num === 3){
        //     slide1.style.display = 'none';
        //     slide2.style.display = 'none';
        //     slide3.style.display = 'grid';
        //     console.log('slide-3')
        // }
        else{
            slide1.style.display = 'none';
            slide2.style.display = 'none';
            slide3.style.display = 'grid';
            console.log('slide-3')
        }
    }
})
