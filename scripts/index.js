const openButton = document.querySelector('.profile__edit-button')

const overlay = document.querySelector('.overlay')

const closeButton = overlay.querySelector('.popup__close')

const titleName = document.querySelector('.profile__title')

const subtitleName = document.querySelector('.profile__subtitle')

const popupName = document.querySelector('.popup__name')

const popupActivity = document.querySelector('.popup__activity')



const togglePopup = () => {                         
    overlay.classList.toggle('overlay_active')      /* добавляет класс overlay_active либо удаляет его(меняет значение на противоположный) */
}

const innerName = () => {
    popupActivity.value = subtitleName.textContent  /* берет из профиля значение субтитл и записывает его в форму хобби */
    popupName.value = titleName.textContent         /* берет из профиля значение титл и записывает его в форму Имя */
}

const innerInfo = () => {
    const profileEditInfo = document.querySelector('.profile__info')
    profileEditInfo.innerHTML = `<div class="profile__edit">
    <h2 class="profile__title">${popupName.value}</h2>
    <button class="profile__edit-button" type="button"></button>
    </div>
    <p class="profile__subtitle">${popupActivity.value}</p>`
    titleName.textContent = popupName.value
    subtitleName.textContent = popupActivity.value
}


openButton.addEventListener('click', togglePopup)   /* При нажатии кнопки редактирования вызывает функцию togglePopup() */ /* колбэк */
openButton.addEventListener('click', innerName)

closeButton.addEventListener('click', togglePopup)  /* При нажатии кнопки закрытия(крестик) вызывает функцию togglePopup() */ /* колбэк */

overlay.addEventListener('click', (event) => {      /* Клик по оверлею закрывает форму */
    if (event.target === event.currentTarget) {     /* определяет куда нажал пользователь(непонятная магия) */
        togglePopup()
    }
})

const form = overlay.querySelector('.popup__form')  /* переменная формы */
form.addEventListener('submit', event => {          /* event - функция обработчик стандартного события */
    event.preventDefault(togglePopup())             /* отмена стандартного события(не перезагрузит страницу) */
    event.preventDefault(innerInfo())
})