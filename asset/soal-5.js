const menuToggleHamburger = document.querySelector('.menu-toggle-hamburger');
const menuToggleActive = document.getElementById('menu-toggle-active');

menuToggleHamburger.addEventListener('click', () => {
    const cekMenuToggleActive = menuToggleActive.classList.contains('max-sm:hidden');

    if(cekMenuToggleActive === true){
        menuToggleActive.classList.replace('max-sm:hidden', 'block')
    }else if(cekMenuToggleActive === false){
        menuToggleActive.classList.replace('block', 'max-sm:hidden')
    }
});