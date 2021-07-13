/* класс PopupWithImage который открывает popup с картинкой*/

import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupImage = this._popup.querySelector('.element__image')
        this._openPopupImage = this._popup.querySelector('.popup_type_image-popup')
        this._popupTitleImage = this._popup.querySelector('.popup__image-title')
    }

openPopup(name, link) {
    this._popupImage.src = link
    this._popupImage.alt = name
    this._popupTitleImage.textContent = name
    super.openPopup()
    }
}