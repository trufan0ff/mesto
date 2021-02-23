const settings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add(settings.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(settings.errorClass)
  }
  
const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove(settings.inputErrorClass) 
    errorElement.textContent = ""
    errorElement.classList.remove(settings.errorClass)
  }

const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, formInput.validationMessage, settings)
  } else {
      hideInputError(formElement, inputElement, settings)
    } 
  }
  
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector))
    const buttonElement = formElement.querySelector(settings.buttonElement)
    toggleButtonState(inputList, buttonElement, settings)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(formElement, inputElement, settings)
                toggleButtonState(inputList, buttonElement, settings)
        })
    })
}

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector))
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault()
      })
      setEventListeners(formElement, settings);
    })
  }

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
function toggleButtonState(hasInvalidInput, buttonElement, settings)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings)
      toggleButtonState(hasInvalidInput(inputList), buttonElement, settings)
    })
  })

enableValidation(settings)