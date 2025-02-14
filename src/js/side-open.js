// ОТКРЫВАЮЩЕЕСЯ МЕНЮ
const hamburgerButton = document.querySelector('.header__menu-btn')

const sideMenu = document.querySelector('.side__menu-btn')

const sideLining = document.querySelector('.side__lining')
const menu = document.querySelector('.side')
const body = document.body

hamburgerButton.addEventListener('click', function () {
  menu.classList.add('menu-open')
  body.classList.add('no-scroll')
})

sideMenu.addEventListener('click', function () {
  menu.classList.remove('menu-open')
  body.classList.remove('no-scroll')
})

menu.addEventListener('click', function (event) {
  if (!sideLining.contains(event.target)) {
    menu.classList.remove('menu-open')
    body.classList.remove('no-scroll')
  }
})
