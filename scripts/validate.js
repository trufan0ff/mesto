enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, enableValidation) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(enableValidation.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(enableValidation.errorClass)
  }
  
const hideInputError = (formElement, inputElement, enableValidation) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(enableValidation.inputErrorClass) 
    errorElement.textContent = ""
    errorElement.classList.remove(enableValidation.errorClass)
  }

const checkInputValidity = (formElement, inputElement, enableValidation) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, formInput.validationMessage, enableValidation)
  } else {
      hideInputError(formElement, inputElement, enableValidation)
    } 
  }
  
const setEventListeners = (formElement, enableValidation) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector))
    const buttonElement = formElement.querySelector(enableValidation.buttonElement)
    toggleButtonState(inputList, buttonElement, enableValidation)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(formElement, inputElement, enableValidation)
                toggleButtonState(inputList, buttonElement, enableValidation)
        })
    })
}

const enableValidationFunc = (enableValidation) => {
    const formList = Array.from(document.querySelectorAll(enableValidation.formSelector))
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault()
      })
      setEventListeners(formElement, enableValidation);
    })
  }

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
const toggleButtonState = (inputList, buttonElement, enableValidation) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(enableValidation.buttonElement)
    buttonElement.disabled = true
  } else {
    buttonElement.classList.remove(enableValidation.buttonElement)
    buttonElement.disabled = false
  }
}

enableValidationFunc(enableValidation)