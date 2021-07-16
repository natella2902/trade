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
        console.log('email', myForm.elements.email.value)
        console.log("password", myForm.elements.password.value);
        console.log("currency", myForm.elements.currency.value);
        console.log("agreement", myForm.elements.agreement.checked);


        // const xhr = new XMLHttpRequest();
        // xhr.open('POST', '#');
        // xhr.send(formData);

        alert('Форма отправлена успешно!')
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
        field.nextElementSibling.textContent = field.validationMessage;
        field.nextElementSibling.style.display = 'flex';
        field.classList.add('form__input-error')
        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}