// ОТКРЫВАЮЩЕЕСЯ ОКНО ОБРАТНОЙ СВЯЗИ
const feedbackButton = document.querySelector(
  '.side__contact-section-btn.side__contact-section-btn--chat'
)
const feedback = document.querySelector('.feedback')
const feedbackClose = document.querySelector('.feedback__btn')
const feedbackLining = document.querySelector('.feedback__lining')
const feedbackHeaderTablet = document.querySelector('.header__btn-chat')
const menu = document.querySelector('.side')
const body = document.body

feedbackButton.addEventListener('click', function () {
  feedback.classList.add('feedback-open')
  body.classList.add('no-scroll')
  setTimeout(() => {
    feedback.classList.add('feedback-anim')
  }, 10)
})

feedbackHeaderTablet.addEventListener('click', function () {
  feedback.classList.add('feedback-open')
  setTimeout(() => {
    feedback.classList.add('feedback-anim')
  }, 10)
  body.classList.add('no-scroll')
})

feedbackClose.addEventListener('click', function () {
  feedback.classList.remove('feedback-anim')
  setTimeout(() => {
    feedback.classList.remove('feedback-open')
  }, 100)
  if (!menu.classList.contains('menu-open')) {
    body.classList.remove('no-scroll')
  }
})

feedback.addEventListener('click', function (event) {
  if (!feedbackLining.contains(event.target)) {
    feedback.classList.remove('feedback-anim')
    setTimeout(() => {
      feedback.classList.remove('feedback-open')
    }, 100)
    if (!menu.classList.contains('menu-open')) {
      body.classList.remove('no-scroll')
    }
  }
})
