const burger = document.querySelector('.header__icon');
const menuParts = document.querySelectorAll('.menu-part')

burger.addEventListener('click', openBurger);

function openBurger(){
    menuParts.forEach(el => {
        el.classList.toggle('open');
    })
}

//* * * * * * * * * * * * * * * * * * * * * * * * * *//