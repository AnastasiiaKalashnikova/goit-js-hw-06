const input = document.querySelector('#validation-input');


input.addEventListener('blur', checkLength);

function checkLength(evt) {
    if (evt.currentTarget.value.length === Number(evt.currentTarget.dataset.length)) {
        evt.currentTarget.classList.add('valid')
        evt.currentTarget.classList.remove('invalid')
    } else {
        evt.currentTarget.classList.add('invalid')
        evt.currentTarget.classList.remove('valid')
    }
}
