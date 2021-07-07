export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._src = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

_getTemplate() {
  const place = document.querySelector('.item-template').content.querySelector(".element").cloneNode(true)
    return place
  }

  getCardElement() {
    this._element = this._getTemplate()
    this._setEventListeners()
    this._elementImage = this._element.querySelector(".element__image")
    this._elementTitle = this._element.querySelector(".element__title")
    this._elementImage.src = this._link
    this._elementImage.alt = this._name
    this._elementTitle.textContent = this._name
    return this._element
  }

  _setEventListeners() {
    this._elementHeart = this._element.querySelector(".element__heart")
    this._deleteButton = this._element.querySelector(".element__delete")
    this._elementPopup = this._element.querySelector(".element__image")
    this._elementHeart.addEventListener("click", (evt) => {
      this._toggleLike(evt)
    });
    this._deleteButton.addEventListener("click", () => {
      this._removeCard()
    });
    this._elementPopup.addEventListener("click", (evt) => {
      this._handleCardClick;
    })
  }

  _toggleLike(evt) {
    evt.target.classList.toggle("element__heart_type_active")
  }

  _removeCard(evt) {
    this._element.closest(".element").remove()
  }
}
