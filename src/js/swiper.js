
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
Swiper.use(Pagination)

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

