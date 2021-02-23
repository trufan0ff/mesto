export class FormValidator {
    constructor(settings, formElement) {
        this._validateSettings = settings
        this._formElement = formElement
    }

    _getErrorElement(inputElement) {
        return this._formElement.querySelector(`#${inputElement.id}-error`);
      }
    
    _showInputError(inputElement, errorMessage, errorElement) {
        inputElement.classList.add(this._settings.inputErrorClass)
        errorElement.textContent = errorMessage
        errorElement.classList.add(this._settings.errorClass)
      }
      
    _hideInputError(inputElement, errorElement) {
        inputElement.classList.remove(this._settings.inputErrorClass) 
        errorElement.textContent = ""
        errorElement.classList.remove(this._settings.errorClass)
      }
    
    _checkInputValidity(inputElement) {
        const errorElement = this._getErrorElement(inputElement)
        if (!inputElement.validity.valid) {
            this._showInputError(
                inputElement,
                inputElement.validationMessage,
                errorElement)
      } else {
          this._hideInputError(inputElement, errorElement)
        } 
      }

    _toggleButtonState(formElement, submitButton, inactiveButtonClass) {
        const hasErrors = !formElement.checkValidity();
        submitButton.disabled = hasErrors;
        submitButton.classList.toggle(inactiveButtonClass, hasErrors);
      }
      
    _setEventListeners() {
        this._inputList = Array.from( this._formElement.querySelectorAll(this._settings.inputSelector))
        this._buttonElement = this._formElement.querySelector(this._settings.buttonElement)
        this._toggleButtonState(this._formElement, this._buttonElement, this._settings.inactiveButtonClass)
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener('input', function () {
                    this._checkInputValidity(inputElement)
                    this._toggleButtonState(buttonElement)
            })
        })
        this._formElement.addEventListener("input", () =>
            this._toggleButtonState(
            this._formElement,
            this._buttonElement,
            this._validateSettings.inactiveButtonClass
      ))}
    
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid
        })
      }
      
      enableValidation() {
        this._setEventListeners()
    }
}