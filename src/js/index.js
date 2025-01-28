import '../scss/style.scss'

console.log('Works!')



let swiperInstance; 

function initSwiper() {
  
  if (window.innerWidth < 768 && !swiperInstance) {
    
    swiperInstance = new Swiper(".swiper", {
      
      direction: "horizontal",
      loop: true,
      
      slidesPerView: "auto",

    
      pagination: {
        el: ".swiper-pagination",
      },

      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  } else if (window.innerWidth >= 767 && swiperInstance) {
    
    swiperInstance.destroy(true, true);
    swiperInstance = null; 
  }
}
document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", initSwiper);


const wrapperLogoDesctop = document.querySelectorAll(".desctop__table");
const wrapperLogoHidden = document.querySelectorAll(".hidden");
const wrapperLogo = document.querySelectorAll(".hidden, .desctop__table");

const button = document.querySelector(".button-open");

button.addEventListener("click", function () {
  const isHidden = button.classList.contains("button-close");

  if (isHidden) {
    wrapperLogoHidden.forEach(element => {
      element.classList.add("hidden");
    });
    wrapperLogoDesctop.forEach(element => {
      element.classList.add("desctop__table");
    });

    button.textContent = 'Показать все';
  } else {
    wrapperLogo.forEach(element => {
      element.classList.remove("desctop__table", "hidden");
    });

    button.textContent = 'Скрыть';
  }

  button.classList.toggle("button-close");
});

// ОТКРЫВАЮЩЕЕСЯ МЕНЮ
const hamburgerButton = document.querySelector('.header__menu-btn')
const menu = document.querySelector(".side");
const sideMenu = document.querySelector(".side__menu-btn")
const body = document.body;
console.log(body);

hamburgerButton.addEventListener("click", function() {
  menu.classList.add('menu-open');
  body.style.overflow = 'hidden';
  console.log(body);
})

sideMenu.addEventListener("click", function(){
  menu.classList.remove('menu-open');
  body.style.overflow = '';
})
// ОТКРЫВАЮЩЕЕСЯ ОКНО ОБРАТНОЙ СВЯЗИ
const feedbackButton = document.querySelector('.side__contact-section-btn.side__contact-section-btn--chat')
const feedback = document.querySelector(".feedback");
const feedbackClose = document.querySelector(".feedback__btn")

feedbackButton.addEventListener("click", function() {
  feedback.classList.add('feedback-open');
  body.style.overflow = 'hidden'; 
  console.log(body);
})

feedbackClose.addEventListener("click", function(){
  feedback.classList.remove('feedback-open');
})

// const hamburgerButton = document.querySelector('.header__menu-btn');
// const menu = document.querySelector('.side');
// const sideMenu = document.querySelector('.side__menu-btn');
// const body = document.body;
// const feedbackButton = document.querySelector('.side__contact-section-btn');
// const feedback = document.querySelector('.feedback');
// const feedbackClose = document.querySelector('.feedback__btn');

// const disableScroll = () => {
//   body.style.overflow = 'hidden';
//   document.documentElement.style.overflow = 'hidden';
// };

// const enableScroll = () => {
//   body.style.overflow = '';
//   document.documentElement.style.overflow = '';
// };

// hamburgerButton.addEventListener('click', () => {
//   menu.classList.add('menu-open');
//   disableScroll();
// });

// sideMenu.addEventListener('click', () => {
//   menu.classList.remove('menu-open');
//   enableScroll();
// });

// feedbackButton.addEventListener('click', () => {
//   feedback.classList.add('feedback-open');
//   disableScroll();
// });

// feedbackClose.addEventListener('click', () => {
//   feedback.classList.remove('feedback-open');
//   enableScroll();
// });