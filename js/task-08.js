const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault()
    const { email, password } = evt.currentTarget.elements;
    if (!(email.value.length)||!(password.value.length)) {
        return alert('Please fill in all fields of the form')
    } else {
        const userData = {
        email : email.value,
        password: password.value
        }
        evt.currentTarget.reset()
    return console.log(userData)
    }
}