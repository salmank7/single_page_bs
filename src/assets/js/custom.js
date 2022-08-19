import "bootstrap"

const header = document.querySelector('.header');
const link = document.querySelectorAll('.nav-item .nav-link')


function scrolled (){
    if(window.scrollY > 100) {
        header.classList.add('scrolled')
        // link.forEach
    } else {
        header.classList.remove('scrolled')
    }    
}

window.addEventListener('scroll', scrolled)