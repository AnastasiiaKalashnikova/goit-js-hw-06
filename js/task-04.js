const decrement = document.querySelector('[data-action="decrement"]')

const increment = document.querySelector('[data-action="increment"]')

let value = document.querySelector('#value')

let counterValue = 0;

decrement.addEventListener("click", decrease);
function decrease() {
    counterValue -= 1;
    value.textContent = counterValue;
};

increment.addEventListener("click", increase)
function increase() {
    counterValue += 1;
    value.textContent = counterValue;
};

