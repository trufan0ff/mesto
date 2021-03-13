import Popup from "./Popup.js"

export default class PopupWithForm extends Popup {
    constructor(popup) {
        super(popup)
        this._submitFormEdit = this._popup.querySelector('.popup__submit')
    }

    _getInputValues() {
        this._inputSelectors = this._popup.querySelectorAll('.popup__input')
        this._inputValues = {}
        this._inputSelectors.forEach((input) => {
            this._inputValues[input.name] = input.value
        })
        return this._inputValues
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitFormEdit(this._getInputValues());
    });
    }

    closePopup() {
        super.closePopup()
        this._popup.querySelector(".popup__form").reset()
    }
}