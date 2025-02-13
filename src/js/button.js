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


  const toggleButton = document.querySelector(".repair__button");
  const repairItems = document.querySelectorAll(".repair__wrapper:nth-child(n+4)"); 

  toggleButton.addEventListener("click", function () {
    const isExpanded = toggleButton.textContent === "Показать все";

    repairItems.forEach((item) => item.classList.toggle("visible", isExpanded));
    toggleButton.textContent = isExpanded ? "Скрыть" : "Показать все";
    toggleButton.classList.toggle("expanded", isExpanded);
  });