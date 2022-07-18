// Loading
let load = document.getElementById('load')
let body = document.querySelector('body')
let mobileMenu = document.getElementById('hamburger')
// mobileMenu.style.display = 'none';
body.style.visibility = 'hidden';
load.style.visibility = 'visible';
setTimeout(() => {
    load.style.display = 'none';
    body.style.visibility = 'visible';
}, 2000);
function hamburger(){
    
}









// const logo = document.getElementById('l')
// // load.style.display = 'none';

// function loader(window, load){
//     load.style.display = 'none';
//     window.onload = init;
//     function init(){
//         setTimeout(() => {
//             load.display = 'block';
//         }, 9000)
//     }
// }

// loader(window, load)

// logo.addEventListener('click', () => {
//     document.style.display = 'none';
//     load.style.display = 'block';
//     setTimeout(() => {
//         document.style.display = 'block';
//     }, 2000)
// });
