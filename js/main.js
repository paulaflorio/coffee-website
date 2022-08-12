// LOADER

onload = () => {
    const load = document.getElementById('load');
    setTimeout(() => {
        load.style.display = 'none';
    }, 2500)
}

// SHOW MENU

const menu = document.getElementById('menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        menu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    })
}

//Click link

const navLink = document.querySelectorAll('.menu-link');

function linkAction(){
    const menu = document.getElementById('menu');
    menu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


// CHANGE BACKGROUND HEADER 
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// MIXITUP FILTER PRODUCTS

let mixerProducts = mixitup('.products-content', {
    selectors: {
        target: '.products-card'
    },
    animation: {
        duration: 300
    }
});

mixerProducts.filter('.delicacies');

const linkProducts = document.querySelectorAll('.products-item');

function activeProducts(){
    linkProducts.forEach(l => l.classList.remove('active-product'));
    this.classList.add('active-product');
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts));

// SCROLL UP 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 350){
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);
