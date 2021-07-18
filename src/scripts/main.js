const myForm = document.querySelector('#myForm');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", myForm.elements.email.value);
    formData.append("password", myForm.elements.password.value);
    formData.append("currency", myForm.elements.currency.value);
    formData.append("agreement", myForm.elements.agreement.checked);
    formData.append("to", "n.jelonkina@mail.ru");

    if (validateForm(myForm)) {

        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', '#');
        // xhr.send(formData);

        alert('Форма отправлена успешно!')

        myForm.elements.email.value = ''
        myForm.elements.password.value = ''
        myForm.elements.currency.value = ''
        myForm.elements.agreement.checked = ''

    }
})


function validateForm(form) {

    let valid = true;

    if (!validateField(form.elements.email)) {
        valid = false;
    }

    if (!validateField(form.elements.password)) {
        valid = false;
    }

    if (!validateField(form.elements.agreement)) {
        valid = false;
    }

    return valid;

}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.nextElementSibling.textContent = field.validationMessage;
        field.nextElementSibling.nextElementSibling.style.display = 'flex';
        field.classList.add('form__input-error')
        return false;
    } else {
        field.nextElementSibling.nextElementSibling.textContent = '';
        field.nextElementSibling.nextElementSibling.style.display = 'none';
        field.classList.remove('form__input-error')
        return true;
    }
}