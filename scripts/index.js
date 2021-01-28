
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

const openEditPopupButton = document.querySelector('.profile__edit-button')
const addEditPopupButton = document.querySelector('.profile__add-button')
const imageOpen = document.querySelector('.element__image')
const popupMesto = document.querySelector('.popup_type_add-popup')
const addCardsButton = popupMesto.querySelector('.popup__submit')
const editPopup = document.querySelector('.popup_type_edit-popup')
const popup = document.querySelector('.popup')
const closePopupButton = popup.querySelector('.popup__close')
const closeMestoButton = popupMesto.querySelector('.popup__close')
const popupImage = document.querySelector('.popup_type_image-popup')
const closeImageButton = popupImage.querySelector('.popup__close')
const openPopupImage = popupImage.querySelector('.popup__image')
const deleteButton = document.querySelector('.element__delete')
const titleName = document.querySelector('.profile__title')
const subtitleName = document.querySelector('.profile__subtitle')
const titleImageMesto = document.querySelector('.element__title')
const popupTitleImage = popupImage.querySelector('.popup__image-title')
const popupName = document.querySelector('.popup__input_type_name')
const popupActivity = document.querySelector('.popup__input_type_activity')
const popupNameMesto = popupMesto.querySelector('.popup__input_type_mesto-name')
const popupLink = popupMesto.querySelector('.popup__input_type_link')
const formEditPopup = document.querySelector('.popup__form')    /* переменная формы */
const listElements = document.querySelector('.elements')
const elementHeart = document.querySelector('.element__heart')

const toggleLike = (evt) => {
  evt.target.classList.toggle('element__heart_type_active')
}

const removeCard = (evt) => {
  evt.target.closest('.element').remove()
}

function getCardElement(place) {  
  const itemTemplate = document.querySelector('.item-template').content
  const addCard = itemTemplate.querySelector('.element').cloneNode(true)   
  addCard.querySelector('.element__title').textContent = place.name           
  addCardImage = addCard.querySelector('.element__image')
  addCardImage.src = place.link
  addCardImage.alt = place.name
  addCard.querySelector('.element__heart').addEventListener('click', toggleLike)
  addCard.querySelector('.element__delete').addEventListener('click', removeCard)   
  addCardImage.addEventListener('click', () => {
    handlePreviewPicture(place)
  });
  return addCard                                             
}

const handlePreviewPicture = (place) => {
    openPopup(popupImage)
    openPopupImage.src = place.link
    openPopupImage.alt = place.name;
    popupTitleImage.textContent = place.name
};

function render() {
  const renderElement = initialCards.map(getCardElement)
  listElements.append(...renderElement)
}

function addNewCard(evt){
  const data = {
    name: popupNameMesto.value,
    link: popupLink.value
  }
  const newElement = getCardElement(data)
  listElements.prepend(newElement)
  closePopup(popupMesto)
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

addEditPopupButton.addEventListener('click', () => {
  openPopup(popupMesto)
})
openEditPopupButton.addEventListener('click', () => {
  openPopup(editPopup)
  inputName()
})
openPopupImage.addEventListener('click', () => {
  openPopup(popupImage)
})

closePopupButton.addEventListener('click', () => {
  closePopup(editPopup)
})  /* При нажатии кнопки закрытия(крестик) вызывает функцию togglePopup() */ /* колбэк */
closeMestoButton.addEventListener('click', () => {
  closePopup(popupMesto)
})
closeImageButton.addEventListener('click', () => {
  closePopup(popupImage)
})

popup.addEventListener('click', (event) => {  
  overlayClose(event)
})

popupMesto.addEventListener('click', (event) => {  
  overlayClose(event)
})

popupImage.addEventListener('click', (event) => {  
  overlayClose(event)
})

function overlayClose(event) {
  const activePopup = document.querySelector('.popup_active')      /* Клик по оверлею закрывает форму */
    if (event.target === event.currentTarget) {     /* определяет куда нажал пользователь(непонятная магия) */
      closePopup(activePopup)
    }
}

formEditPopup.addEventListener('submit', event => {          /* event - функция обработчик стандартного события */
  event.preventDefault()                          /* отмена стандартного события(не перезагрузит страницу) */
  inputInfo()
  closePopup(editPopup)                         
})

const addNewCardCall = document.querySelector('.popup_type_add-popup')

addNewCardCall.addEventListener('submit', event => {          /* Добавление новой карточки при нажатии на кнопку -Создать-*/
  event.preventDefault()                                     /* отмена стандартного события(не перезагрузит страницу) */  
  addNewCard()                                               //Запуск функции создания карточки
  const formReset = addNewCardCall.querySelector('.popup__form').reset()                                     /*Сброс заполненых параметров*/                                          /*Сброс заполненых параметров*/
})