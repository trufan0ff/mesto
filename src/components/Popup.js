/* класс Popup, который отвечает за открытие и закрытие попапа*/

export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector('.popup')
        this.setEventListeners()
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    openPopup(popup) {
        this._popup.classList.add('popup_active')            /* добавляет класс popup_active */
        document.addEventListener('keydown', this._handleEscClose)
    }

    closePopup(popup) {
        this._popup.classList.remove('popup_active')            /* Удаляет класс popup_active */
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup(this._popup)
        }
    }

    _handleCloseByOverlay(event) {
          if (event.target === event.currentTarget) {/* определяет куда нажал пользователь(непонятная магия) */
            this.closePopup(this._popap)
        }
    }

    setEventListeners(){
        const close = this._popup.querySelector(".popup__close");
        close.addEventListener("click", () => {
        this.closePopup()
        });
        this._popup.addEventListener('click', (evt) => {
        this._handleEscClose(evt)
        })
    }
}
