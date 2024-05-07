function validateEmpty(keys, elements) {
    for (const key of keys) {
        if (
            elements[key].type !== 'text' &&
            elements[key].type !== 'password' &&
            elements[key].type !== 'email' &&
            elements[key].type !== 'number'
        ) {
            continue
        }
        if (elements[key].value.length < 1) {
            elements[key].classList.add('registration-form__text-field-error')
            continue
        }
        elements[key].classList.remove('registration-form__text-field-error')
    }
}

function validateAge(id) {
    const validationPattern = /^[0-9]{1,3}$/gm
    const ageInput = document.getElementById(id)
    if (!validationPattern.test(ageInput.value)) {
        ageInput.classList.add('registration-form__text-field-error')
        return null
    }
    if (parseInt(ageInput.value) < 16) {
        ageInput.classList.add('registration-form__text-field-error')
        return null
    }
    ageInput.classList.remove('registration-form__text-field-error')
    return ageInput.value
}

function validateNonNullableString(id) {
    const validationPattern = /[А-Яа-яA-Za-z]{1,}/gm
    const input = document.getElementById(id)
    if (!validationPattern.test(input.value)) {
        input.classList.add('registration-form__text-field-error')
        return null
    }
    input.classList.remove('registration-form__text-field-error')
    return input.value
}

function validateEmail() {
    const emailInput = document.getElementById('email')
    const validationPattern = /^\S+@\S+\.\S+$/gm
    if(!validationPattern.test(emailInput.value)){
        emailInput.classList.add('registration-form__text-field-error')
        return null
    }
    emailInput.classList.remove('registration-form__text-field-error')
    return emailInput.value
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phone')
    const validationPattern = /^\+?[1-9][0-9]{7,14}$/
    if(!validationPattern.test(phoneNumber.value)){
        phoneNumber.classList.add('registration-form__text-field-error')
        return null
    }
    phoneNumber.classList.remove('registration-form__text-field-error')
    return phoneNumber.value
}

function validateGender(){
    const maleRadio = document.querySelector('#male')
    const femaleRadio = document.querySelector('#female')
    if(!maleRadio.checked && !femaleRadio.checked){
        maleRadio.classList.add('registration-form__text-field-error')
        femaleRadio.classList.add('registration-form__text-field-error')
        return null
    }
    maleRadio.classList.remove('registration-form__text-field-error')
    femaleRadio.classList.remove('registration-form__text-field-error')
    return maleRadio.checked?'male':'female'
}
function validateForm(formElements){
    const usefulKeys = Object.keys(formElements).reduce((acc, element) => {
        if (isNaN(parseInt(element))) {
            acc.push(element)
        }
        return acc
    }, [])
    validateEmpty(usefulKeys, formElements)
    return {
        firstName: validateNonNullableString('firstName'),
        lastName: validateNonNullableString('lastName'),
        gender: validateGender(),
        age: validateAge('age'),
        login: validateNonNullableString('login'),
        password: validateNonNullableString('password'),
        email: validateEmail(),
        phone: validatePhoneNumber(),
        address: validateNonNullableString('address')
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const regModal = document.getElementById('registration-modal')

    function submitForm(e) {
        e.preventDefault()
        const formElements = Object.assign({}, e.srcElement.elements)
        const validatedValues = validateForm(formElements)
        if(Object.values(validatedValues).every(val =>val!== null)){
            localStorage.setItem('regData', JSON.stringify(validatedValues))
            regModal.classList.add('modal-hidden')
        }
    }

    const regData = localStorage.getItem('regData')
    const regForm = regModal.querySelector('#registration-form')
    if (!regData) {
        regModal.classList.remove('modal-hidden')
        regForm.addEventListener('submit', submitForm)
    }

})
