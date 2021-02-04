const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add('popup__input_type_error')
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active')
  }
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove('popup__input_type_error') 
    errorElement.textContent = ""
    errorElement.classList.remove('popup__input-error_active')
  }

const checkInputValidity = (formElement, inputElement) => {
    if (!formInput.validity.valid) {
      showInputError(formElement, inputElement, formInput.validationMessage)
  } else {
      hideInputError(formElement, inputElement)
    } 
  }
  
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
    const buttonElement = formElement.querySelector('.popup__submit')
    toggleButtonState(inputList, buttonElement)
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(formElement, inputElement)
                toggleButtonState(inputList, buttonElement)
        })
    })
}

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'))
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault()
      })
    })
  }

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }
  
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit_inactive')
  } else {
    buttonElement.classList.remove('popup__submit_inactive')
  }}

  enableValidation({
    form: '.popup__form',
    formInput: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
})
