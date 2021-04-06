const menu = document.querySelector('#mobile-menu')
const nav = document.querySelector('.navigation')
const navlogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu =()=>{
    menu.classList.toggle('is-active')
    nav.classList.toggle('active')
    // body.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);



const hideMobileMenu = () => {
    const menubars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menubars){
        menu.classList.toggle('is-active')
        nav.classList.remove('active')
    }
}

nav.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);