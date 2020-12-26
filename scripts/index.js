const openButton = document.querySelector('.profile__edit-button')

const overlay = document.querySelector('.overlay')

const closeButton = overlay.querySelector('.popup__close')

const titleName = document.querySelector('.profile__title')

const subtitleName = document.querySelector('.profile__subtitle')

const popupName = document.querySelector('.popup__name')

const popupActivity = document.querySelector('.popup__activity')


const togglePopup = () => {
    overlay.classList.toggle('overlay_active')
    popupActivity.value = subtitleName.textContent
    popupName.value = titleName.textContent
    popupName.textContent = titleName.value
    popupActivity.textContent = subtitleName.value
}
openButton.addEventListener('click', togglePopup)

closeButton.addEventListener('click', togglePopup)

overlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        togglePopup()
    }
})

const form = overlay.querySelector('.popup__form')
form.addEventListener('submit', event => {
    event.preventDefault(togglePopup())
})