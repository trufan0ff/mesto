export default class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup)
        this.setEventListeners()
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    openPopup() {
        this._popup.classList.add('popup_active')            /* добавляет класс overlay_active */
        document.addEventListener('keydown', this._handleEscClose.bind(this))
    }

    closePopup(popup) {
        this._popup.classList.remove('popup_active')            /* Удаляет класс overlay_active */
        document.removeEventListener('keydown', this._handleEscClose.bind(this))
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            const openedPopup = document.querySelector('.popup_active')
            this.closePopup(openedPopup)
        }
    }

    _handleCloseByOverlay(event) {
        const activePopup = document.querySelector('.popup_active')      /* Клик по оверлею закрывает форму */
          if (event.target === event.currentTarget) {     /* определяет куда нажал пользователь(непонятная магия) */
            this.closePopup(activePopup)
        }
    }

    setEventListeners(){
        const close = this._popup.querySelector(".popup__close");
        close.addEventListener("click", () => {
          this.closePopup()
        });
        this._popup.addEventListener('click', (evt) => {
          this._handleOverlayClose(evt)
        })
      }
}
