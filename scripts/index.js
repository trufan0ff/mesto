
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'             
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const openButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const imageOpen = document.querySelector('.element__image')
const popupMesto = document.querySelector('#add-popup')
const addCards = popupMesto.querySelector('.popup__submit')
const popupEdit = document.querySelector('#edit-popup')
const popup = document.querySelector('.popup')
const closeButton = popup.querySelector('.popup__close')
const closeButtonMesto = popupMesto.querySelector('.popup__close')
const popupImage = document.querySelector('#image-popup')
const closeButtonImage = popupImage.querySelector('.popup__close')
const openPopupImage = popupImage.querySelector('.popup__image')
const deleteButton = document.querySelector('.element__delete')
const titleName = document.querySelector('.profile__title')
const subtitleName = document.querySelector('.profile__subtitle')
const titleImageMesto = document.querySelector('.element__title')
const popupTitleImage = popupImage.querySelector('.popup__title')
const popupName = document.querySelector('.popup__input_type_name')
const popupActivity = document.querySelector('.popup__input_type_activity')
const popupNameMesto = popupMesto.querySelector('.popup__input_type_mesto-name')
const popupLink = popupMesto.querySelector('.popup__input_type_link')
const form = popup.querySelector('.popup__form')    /* переменная формы */
const listElements = document.querySelector('.elements')

const elementHeart = document.querySelector('.element__heart')
const toggleLike = () => {
  elementHeart.classList.toggle('.element__heart_active')
}

const removeCard = () => {
  deleteButton.closest('.element').remove()
}

function getCardElement(place) {  
  const itemTemplate = document.querySelector('.item-template').content
  const addCard = itemTemplate.querySelector('.element').cloneNode(true)   

  addCard.querySelector('.element__title').textContent = place.name           
  addCarrdImage = addCard.querySelector('.element__image')
  addCarrdImage.src = place.link
  addCarrdImage.alt = place.name
  addCard.querySelector('.element__heart').addEventListener('click', toggleLike)
  addCard.querySelector('.element__delete').addEventListener('click', removeCard)   
  addCarrdImage.addEventListener('click', (evt) => {
    evt.preventDefault()
    togglePopupImage()
    popupLink.src = place.link
    popupNameMesto.alt = place.name
    popupTitleImage.textContent = place.name
  })
  return addCard                                             
}

function render() {
  const renderElement = initialCards.map(getCardElement)
  listElements.append(...renderElement)
}

function addNewCard(evt){
  evt.preventDefault()
  const data = {
    name: popupNameMesto.value,
    link: popupLink.value
  }
  const newElement = addingCards(data)
  listElements.prepend(newElement)
  closeButtonMesto.addEventListener('click', closePopup)
}
render();

const openPopup = (popup) => {
  popup.classList.add('popup_active')            /* добавляет класс overlay_active */
}

const closePopup = (popup) => {
  popup.classList.remove('popup_active')            /* Удаляет класс overlay_active */
}



const inputName = () =>{
  popupActivity.value = subtitleName.textContent; /* берет из профиля значение субтитл и записывает его в форму хобби */
  popupName.value = titleName.textContent; /* берет из профиля значение титл и записывает его в форму Имя */
}

const inputInfo = () => {
    titleName.textContent = popupName.value
    subtitleName.textContent = popupActivity.value
}

addButton.addEventListener('click', openPopup)
openButton.addEventListener('click', () => {
  openPopup()
  inputName()
})
openPopupImage.addEventListener('click', openPopup)
deleteButtonRemove.addEventListener('click', removeCard)

closeButton.addEventListener('click', closePopup)  /* При нажатии кнопки закрытия(крестик) вызывает функцию togglePopup() */ /* колбэк */
closeButtonMesto.addEventListener('click', closePopup)
closeButtonImage.addEventListener('click', closePopup)

const activePopup = document.querySelector('.popup_active')
activePopup.addEventListener('click', (event) => {        /* Клик по оверлею закрывает форму */
    if (event.target === event.currentTarget) {     /* определяет куда нажал пользователь(непонятная магия) */
      closePopup(popup)
    }
})

form.addEventListener('submit', event => {          /* event - функция обработчик стандартного события */
  event.preventDefault()                          /* отмена стандартного события(не перезагрузит страницу) */
  inputInfo()
  closePopup(popup)                         
})

const addNewCardCall = document.querySelector('.popup_type_add-popup')

addNewCardCall.addEventListener('submit', event => {          /* Добавление новой карточки при нажатии на кнопку -Создать-
  event.preventDefault()                                     /* отмена стандартного события(не перезагрузит страницу) */  
  addNewCard()                                               //Запуск функции создания карточки
  popupNameMesto.reset()                                     /*Сброс заполненых параметров*/
  popupLink.reset()                                          /*Сброс заполненых параметров*/
})