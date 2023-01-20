const navlinks = document.querySelector('.nav-links')
const hamburgerBtn = document.querySelector('.hambueger-btn')
const toogleImg = document.querySelector('#toogle-img')

hamburgerBtn.addEventListener('click', () => {
    navlinks.classList.toggle('open')

    isOpen = navlinks.classList.contains('open');

    if (isOpen) {
        toogleImg.src = './img/icon-close.svg';
    } else {
        toogleImg.src = './img/icon-hamburger.svg';
    }

})