const burger = document.querySelector('.header__icon');
const menuParts = document.querySelectorAll('.menu-part');
const btnClose = document.querySelector('.header__btn-close')

burger.addEventListener('click', openBurger);
btnClose.addEventListener('click', closeBurger);

function openBurger() {
    menuParts.forEach(el => {
        el.classList.add('open');
    })
    setTimeout(() => { 
        btnClose.classList.add('header__btn-close--active')
     }, 300);
}

function closeBurger(){
    menuParts.forEach(el => {
        el.classList.remove('open');
    })
    btnClose.classList.remove('header__btn-close--active');
}

//* * * * * * * * * * * * * * * * * * * * * * * * * *//