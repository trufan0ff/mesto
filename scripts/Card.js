import {
    popupImage,
    openPopupImage,
    openPopup,
    popupTitleImage
  } from "./index.js"

export class Card {
    constructor(data, placeTemplate) {
        this._name = data.name
        this._link = data.link
        this._placeTemplate = placeTemplate
}

_getTemplate() {
    const place = document.querySelector(this._placeTemplate).content.querySelector(".element").cloneNode(true)
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
      evt.preventDefault()
      openPopup(popupImage)
      openPopupImage.src = this._link
      openPopupImage.alt = this._name
      popupTitleImage.textContent = this._name
    })
  }

  _toggleLike(evt) {
    evt.target.classList.toggle("element__heart_type_active")
  }

  _removeCard(evt) {
    this._element.querySelector(".element__delete").closest(".element").remove()
  }
}
