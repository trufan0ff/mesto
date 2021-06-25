export default class FormValidator {
    constructor(settings, formSelector) {
        this._settings = settings,
        this._formElement = formSelector
    }

    _getErrorElement(inputElement) {
        return this._formElement.querySelector(`.${inputElement.id}-error`)
      }
    
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._getErrorElement(inputElement)
        inputElement.classList.add(this._settings.inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(this._settings.errorClass)
      }
      
    _hideInputError(inputElement) {
        const errorElement = this._getErrorElement(inputElement)
        inputElement.classList.remove(this._settings.inputErrorClass) 
        errorElement.classList.remove(this._settings.errorClass)
        errorElement.textContent = ""
      }
    
    _checkInputValidity(inputElement) {
        const errorElement = this._getErrorElement(inputElement)
        if (!inputElement.validity.valid) {
            this._showInputError(
                inputElement,
                inputElement.validationMessage,
                errorElement)
      } else {
          this._hideInputError(inputElement)
        } 
      }

    _toggleButtonState() {
        const hasErrors = !this._formElement.checkValidity()
        this._buttonElement.disabled = hasErrors
        this._buttonElement.classList.toggle(this._settings.inactiveButtonClass, hasErrors)
      }
      
    _setEventListeners() {
        this._inputList = Array.from( this._formElement.querySelectorAll(this._settings.inputSelector))
        this._buttonElement = this._formElement.querySelector(this._settings.buttonElement)
        this._toggleButtonState(this._formElement, this._buttonElement, this._settings.inactiveButtonClass)
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener('input',  (evt) => {
                    this._checkInputValidity(inputElement)
            })
        })
        this._formElement.addEventListener("input", () => {
            this._toggleButtonState(
              this._formElement,
              this._buttonElement,
              this._settings.inactiveButtonClass
      )}
    )}
    
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid
        })
      }
      
      enableValidation() {
        this._setEventListeners()
    }
}