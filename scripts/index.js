
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

const openEditPopupButton = document.querySelector('.profile__edit-button')
const addEditPopupButton = document.querySelector('.profile__add-button')
const imageOpen = document.querySelector('.element__image')
const popupMesto = document.querySelector('.popup_type_add-popup')
const addCardsButton = popupMesto.querySelector('.popup__submit')
const profilePopup = document.querySelector('.popup_type_edit-popup')  
const closePopupButton = profilePopup.querySelector('.popup__close')
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
  const addCardImage = addCard.querySelector('.element__image')
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
  document.addEventListener('keydown', closeByEscape);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_active')            /* Удаляет класс overlay_active */
  document.removeEventListener('keydown', closeByEscape);
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
  openPopup(profilePopup)
  inputName()
})
openPopupImage.addEventListener('click', () => {
  openPopup(popupImage)
})

closePopupButton.addEventListener('click', () => {
  closePopup(profilePopup)
})  
closeMestoButton.addEventListener('click', () => {
  closePopup(popupMesto)
})
closeImageButton.addEventListener('click', () => {
  closePopup(popupImage)
})

profilePopup.addEventListener('click', (event) => {  
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
  closePopup(profilePopup)                         
})

const addNewCardCall = popupMesto.querySelector('.popup__form')

addNewCardCall.addEventListener('submit', event => {          /* Добавление новой карточки при нажатии на кнопку -Создать-*/
  event.preventDefault()                                     /* отмена стандартного события(не перезагрузит страницу) */  
  addNewCard()                                               //Запуск функции создания карточки
  addNewCardCall.reset()                                     /*Сброс заполненых параметров*/                                          /*Сброс заполненых параметров*/
})

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active')
    closePopup(openedPopup);
  }
}