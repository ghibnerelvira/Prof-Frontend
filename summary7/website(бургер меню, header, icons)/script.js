const switcher = document.querySelector('.switcher');
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger_menu');
const nvaMenu = document.querySelector('.header nav .a')
const accauntBtn = document.querySelector('.accaunt_btn')
const popup = document.querySelector('.popup')

switcher.addEventListener('click', () => {
    switcher.classList.toggle('fa-toggle-off')
    switcher.classList.toggle('fa-toggle-on')
    header.classList.toggle('light_mode')
})

burgerMenu.addEventListener('click', () => {
    nvaMenu.classList.toggle('active')
})

accauntBtn.addEventListener('click', () => {
    popup.classList.toggle('opened')
})