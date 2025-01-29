import '../scss/style.scss'

console.log('Works!')

let swiperInstance

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,

      slidesPerView: 'auto',

      pagination: {
        el: '.swiper-pagination'
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      scrollbar: {
        el: '.swiper-scrollbar'
      }
    })
  } else if (window.innerWidth >= 767 && swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }
}
document.addEventListener('DOMContentLoaded', initSwiper)
window.addEventListener('resize', initSwiper)

const wrapperLogoDesctop = document.querySelectorAll('.desctop__table')
const wrapperLogoHidden = document.querySelectorAll('.hidden')
const wrapperLogo = document.querySelectorAll('.hidden, .desctop__table')

const button = document.querySelector('.button-open')

button.addEventListener('click', function () {
  const isHidden = button.classList.contains('button-close')

  if (isHidden) {
    wrapperLogoHidden.forEach((element) => {
      element.classList.add('hidden')
    })
    wrapperLogoDesctop.forEach((element) => {
      element.classList.add('desctop__table')
    })

    button.textContent = 'Показать все'
  } else {
    wrapperLogo.forEach((element) => {
      element.classList.remove('desctop__table', 'hidden')
    })

    button.textContent = 'Скрыть'
  }

  button.classList.toggle('button-close')
})

// ОТКРЫВАЮЩЕЕСЯ МЕНЮ
const hamburgerButton = document.querySelector('.header__menu-btn')
const menu = document.querySelector('.side')
const sideMenu = document.querySelector('.side__menu-btn')
const body = document.body
const sideLining = document.querySelector('.side__lining'); // Элемент, по которому не должно закрываться меню

hamburgerButton.addEventListener('click', function () {
  menu.classList.add('menu-open');
  body.classList.add('no-scroll');
});

sideMenu.addEventListener('click', function () {
  menu.classList.remove('menu-open');
  body.classList.remove('no-scroll');
});

// Закрытие при клике на фон
menu.addEventListener('click', function (event) {
  // Проверяем, если клик был именно по самому меню, а не внутри side__lining
  if (!sideLining.contains(event.target)) {
    menu.classList.remove('menu-open');
    body.classList.remove('no-scroll');
  }
});

// // Чтобы клики внутри side__lining не закрывали меню
// sideLining.addEventListener('click', function (event) {
//   event.stopPropagation(); // Останавливаем всплытие события
// });





// ОТКРЫВАЮЩЕЕСЯ ОКНО ОБРАТНОЙ СВЯЗИ
const feedbackButton = document.querySelector('.side__contact-section-btn.side__contact-section-btn--chat')
const feedback = document.querySelector('.feedback')
const feedbackClose = document.querySelector('.feedback__btn')
const feedbackLining = document.querySelector('.feedback__lining')
const feedbackHeaderTablet = document.querySelector('.header__btn-chat')



feedbackButton.addEventListener('click', function () {
  feedback.classList.add('feedback-open')
  setTimeout(() => {
    feedback.classList.add('feedback-anim')
  }, 10)
})

feedbackHeaderTablet.addEventListener('click', function () {
  feedback.classList.add('feedback-open')
  setTimeout(() => {
    feedback.classList.add('feedback-anim')
  }, 10)
  body.classList.add('no-scroll');
})


feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback-anim')
  setTimeout(() => {
    feedback.classList.remove('feedback-open')
  }, 100)
  if (!menu.classList.contains('menu-open')){
    body.classList.remove('no-scroll');
  }
})


feedback.addEventListener('click', function (event) {
 
  if (!feedbackLining.contains(event.target)) {
    feedback.classList.remove('feedback-anim')
    setTimeout(() => {
      feedback.classList.remove('feedback-open')
    }, 100)
    if (!menu.classList.contains('menu-open')){
      body.classList.remove('no-scroll');
    }
  }
});





const callButton = document.querySelector(  '.side__contact-section-btn.side__contact-section-btn--call')
const call = document.querySelector('.call')
const callClose = document.querySelector('.call__btn')
const callLining = document.querySelector('.call__lining')
const callHeaderTablet = document.querySelector('.header__btn-call')

callButton.addEventListener('click', function () {
  call.classList.add('call-open')
  setTimeout(() => {
    call.classList.add('call-anim')
  }, 10)
})

callHeaderTablet.addEventListener('click', function () {
  call.classList.add('call-open')
  setTimeout(() => {
    call.classList.add('call-anim')
  }, 10)
  body.classList.add('no-scroll');
})




callClose.addEventListener('click', function () {
  call.classList.remove('call-anim')
  setTimeout(() => {
    call.classList.remove('call-open')
  }, 100)

  if (!menu.classList.contains('menu-open')){
    body.classList.remove('no-scroll');
  }

})

call.addEventListener('click', function(event){
  if(!callLining.contains(event.target)){
    call.classList.remove('call-anim')
    setTimeout(() => {
      call.classList.remove('call-open')
    }, 100)
  }
  if (!menu.classList.contains('menu-open')){
    body.classList.remove('no-scroll');
  }
})
