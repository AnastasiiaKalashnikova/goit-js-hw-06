const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', handler);

function handler(event) {
    let name = event.currentTarget.value.trim()
    if (name.length < 1) {
        output.textContent = 'Anonymous';
    } else {
        console.log(name)
     output.textContent = name;
}
}


