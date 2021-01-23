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

const popup = document.querySelector('#edit-popup')
const popupMesto = document.querySelector('#add-popup')
const popupImage = document.querySelector('#image-popup')

const closeButton = popup.querySelector('.popup__close')
const closeButtonMesto = popupMesto.querySelector('.popup__close')
const closeButtonImage = popupImage.querySelector('.popup__close')

const titleName = document.querySelector('.profile__title')
const subtitleName = document.querySelector('.profile__subtitle')

const popupName = document.querySelector('.popup__input_type_name')
const popupActivity = document.querySelector('.popup__input_type_activity')

const addButton = document.querySelector('.profile__add-button')

const imageOpen = document.querySelector('.element__image')

const popupNameMesto = document.querySelector('.popup__input_type_mesto-name')

const popupLink = document.querySelector('.popup__input_type_link')

const form = popup.querySelector('.popup__form')    /* переменная формы */

const titleImageMesto = document.querySelector('.element__title')

const popupTitleImage = popupImage.querySelector('.popup__title')

const addCards = popupMesto.querySelector('.popup__submit')

const listElements = document.querySelector('.elements')



function addingCards(place) {  
  const itemTemplate = document.querySelector('.item-template').content      
  const addCard = itemTemplate.cloneNode(true)                               //Клонируем template из HTML и заносим в переменную
  addCard.querySelector('.element__title').textContent = place.name           
  addCard.querySelector('.element__image').src = place.link
  addCard.querySelector('.element__image').alt = place.name
  addCard.querySelector('.element__heart').addEventListener('click', toggleLike)
  addCard.querySelector('.delete').addEventListener('click', removeCard)   
  addCard.querySelector('.elements').addEventListener('click', (evt) => {
    evt.preventDefault()
    togglePopupMesto()
    popupImage.src = place.link
    popupImage.alt = place.name
    popupNameMesto.textContent = place.name
  })
  return addCard                                             
}

function render() {
  const renderElement = initialCards.map(addingCards)
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
  togglePopupMesto()
}
render();



const togglePopup = () => {                         
  popup.classList.toggle('popup_active')          /* добавляет класс overlay_active либо удаляет его(меняет значение на противоположный) */
}

const togglePopupMesto = () => {
  popupMesto.classList.toggle('popup_active')  
}

const togglePopupImage = () => {
  popupImage.classList.toggle('popup_active')  
}





function toggleLike(evt){
  evt.target.classList.toggle('element__heart_active')
}



function removeCard(evt){
  evt.target.closest('.element').remove()
}





function innerName() {
  popupActivity.value = subtitleName.textContent; /* берет из профиля значение субтитл и записывает его в форму хобби */
  popupName.value = titleName.textContent; /* берет из профиля значение титл и записывает его в форму Имя */
}

const innerInfo = () => {
    titleName.textContent = popupName.value
    subtitleName.textContent = popupActivity.value
}





addButton.addEventListener('click', togglePopupMesto)
openButton.addEventListener('click', togglePopup)   /* При нажатии кнопки редактирования вызывает функцию togglePopup() */ /* колбэк */
openButton.addEventListener('click', innerName)
imageOpen.addEventListener('click', togglePopupImage)




closeButton.addEventListener('click', togglePopup)  /* При нажатии кнопки закрытия(крестик) вызывает функцию togglePopup() */ /* колбэк */
closeButtonMesto.addEventListener('click', togglePopupMesto)
closeButtonImage.addEventListener('click', togglePopupImage)





popup.addEventListener('click', (event) => {        /* Клик по оверлею закрывает форму */
    if (event.target === event.currentTarget) {     /* определяет куда нажал пользователь(непонятная магия) */
        togglePopup()
        togglePopupMesto()
        togglePopupImage()
    }
})

form.addEventListener('submit', event => {          /* event - функция обработчик стандартного события */
  event.preventDefault()                          /* отмена стандартного события(не перезагрузит страницу) */
  innerInfo()
  togglePopup()                                   
})

const heartLike = document.querySelector('.element__heart')
heartLike.addEventListener('click', toggleLike)
addEventListener('click', removeCard)   
addEventListener('click', (evt) => {
  evt.preventDefault()
  togglePopupMesto()
  popupImage.src = place.link
  popupImage.alt = place.name
  popupNameMesto.textContent = place.name
})





