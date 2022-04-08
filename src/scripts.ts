const mobileMenuBtn = document.querySelector('.mobile-menu__btn');
const mobileMenu    = document.querySelector('.mobile-menu__list');

mobileMenuBtn.addEventListener("click", function(e) {
    mobileMenu.classList.toggle('active')
})
