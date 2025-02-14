const callButton = document.querySelector(
  '.side__contact-section-btn.side__contact-section-btn--call'
)
const call = document.querySelector('.call')
const callClose = document.querySelector('.call__btn')
const callLining = document.querySelector('.call__lining')
const callHeaderTablet = document.querySelector('.header__btn-call')

const menu = document.querySelector('.side')
const body = document.body

callButton.addEventListener('click', function () {
  call.classList.add('call-open')
  body.classList.add('no-scroll')
  setTimeout(() => {
    call.classList.add('call-anim')
  }, 10)
})

callHeaderTablet.addEventListener('click', function () {
  call.classList.add('call-open')
  setTimeout(() => {
    call.classList.add('call-anim')
  }, 10)
  body.classList.add('no-scroll')
})

callClose.addEventListener('click', function () {
  call.classList.remove('call-anim')
  setTimeout(() => {
    call.classList.remove('call-open')
  }, 100)

  if (!menu.classList.contains('menu-open')) {
    body.classList.remove('no-scroll')
  }
})

call.addEventListener('click', function (event) {
  if (!callLining.contains(event.target)) {
    call.classList.remove('call-anim')
    setTimeout(() => {
      call.classList.remove('call-open')
    }, 100)
  }
  if (!menu.classList.contains('menu-open')) {
    body.classList.remove('no-scroll')
  }
})
