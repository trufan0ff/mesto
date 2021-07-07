/* класс PopupWithImage который открывает popup с картинкой*/

import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._openPopupImage = this._popup.querySelector('.popup_type_image-popup')
        this._popupTitleImage = this._popup.querySelector('.popup__image-title')
    }
    
    openPopup(name, link) {
        this.openPopup(_popupImage)
        this._openPopupImage.src = this.link
        this._openPopupImage.alt = this.name
        this._popupTitleImage.textContent = this.name
    }
}