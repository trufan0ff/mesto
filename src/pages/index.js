import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import '../pages/index.css';

const initialCards = [
  {
    name: 'Памуккале, Турция',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/11/3094/default_113094.jpg?'             
  },
  {
    name: 'Озеро Ретба, Сенегал',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/11/3096/default_113096.jpg?'
  },
  {
    name: 'Сокотра, Йемен',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/11/3112/default_113112.jpg?'
  },
  {
    name: 'парк Лассен, США',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/90/135/default_90135.jpg?'
  },
  {
    name: 'Гейзер Флай, США',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/11/3114/default_113114.jpg?'
  },
  {
    name: 'Дорога гигантов, Ирландия',
    link: 'https://tripmydream.cc/travelhub/travel/block_gallery/11/3116/default_113116.jpg?'
  }
]; 

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonElement: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
}

const openEditPopupButton = document.querySelector('.profile__edit-button')
const addEditPopupButton = document.querySelector('.profile__add-button')
export const imageOpen = document.querySelector('.element__image')
const popupPlace = document.querySelector('.popup_type_add-popup')
const addCardsButton = popupPlace.querySelector('.popup__submit')
const profilePopup = document.querySelector('.popup_type_edit-popup')  
const closePopupButton = profilePopup.querySelector('.popup__close')
export const popupImage = document.querySelector('.popup_type_image-popup')
export const openPopupImage = popupImage.querySelector('.popup__image')
const deleteButton = document.querySelector('.element__delete')
const titleName = document.querySelector('.profile__title')
const subtitleName = document.querySelector('.profile__subtitle')
const titleImageMesto = document.querySelector('.element__title')
export const popupTitleImage = popupImage.querySelector('.popup__image-title')
const popupName = document.querySelector('.popup__input_type_name')
const popupActivity = document.querySelector('.popup__input_type_activity')
const popupNamePlace = popupPlace.querySelector('.popup__input_type_mesto-name')
const popupLink = popupPlace.querySelector('.popup__input_type_link')
const formEditPopup = profilePopup.querySelector('.popup__form')    /* переменная формы профиля*/
const formEditPopups = document.querySelectorAll('.popup__form')
const listElements = document.querySelector('.elements')
const elementHeart = document.querySelector('.element__heart')
export const popup = document.querySelector('.popup')

initialCards.forEach((item) => {
  const card = new Card(item, '.item-template', handleCardClick)
  const place = card.getCardElement()
  listElements.append(place)
})

const popupImageClass = new PopupWithImage(openPopupImage);
popupImage.addEventListener('click', () => {
  popupImageClass.openPopup()
})

const newCardPopupAdd = new PopupWithForm(popupPlace);
addEditPopupButton.addEventListener('click', () => {
  newCardPopupAdd.openPopup();
});

const newCardPopup = new PopupWithForm(profilePopup);
openEditPopupButton.addEventListener('click', () => {
  newCardPopup.openPopup();
});

const addNewCard = () => {
  const data = {
    name: popupNamePlace.value,
    link: popupLink.value
  }
  const newElement = new Card(data, '.item-template', handleCardClick)
  const newPlace = newElement.getCardElement();
  listElements.prepend(newPlace)
  popupClose.closePopup()
}



const inputName = () =>{
  popupActivity.value = subtitleName.textContent /* берет из профиля значение субтитл и записывает его в форму хобби */
  popupName.value = titleName.textContent /* берет из профиля значение титл и записывает его в форму Имя */
}

const inputInfo = () => {
    titleName.textContent = popupName.value
    subtitleName.textContent = popupActivity.value

}

const popupClose = new Popup();

formEditPopup.addEventListener('submit', event => {          /* event - функция обработчик стандартного события */
  event.preventDefault()                          /* отмена стандартного события(не перезагрузит страницу) */
  inputInfo()
  popupClose.closePopup()                         
})

const addNewCardCall = popupPlace.querySelector('.popup__form')

addNewCardCall.addEventListener('submit', event => {          /* Добавление новой карточки при нажатии на кнопку -Создать-*/
  event.preventDefault()                                     /* отмена стандартного события(не перезагрузит страницу) */  
  addNewCard()                                               //Запуск функции создания карточки
  popupClose.closePopup() 
  addNewCardCall.reset()                                     /*Сброс заполненых параметров*/                                          
  addCardsButton.classList.add('popup__submit_inactive')
})

formEditPopups.forEach((formElement) => {
  const formValidator = new FormValidator(settings, formElement);
  formValidator.enableValidation();
})


export const handleCardClick = () => {
  popupImageClass.openPopup()
}