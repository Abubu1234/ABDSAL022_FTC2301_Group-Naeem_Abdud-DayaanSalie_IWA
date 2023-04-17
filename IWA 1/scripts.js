const MAX_NUMBER= 5
const MIN_NUMBER= -5
const STEP_AMOUNT = 5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="substract"]')
const add = document.querySelector('[data-key="add"]')


const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value= newValue;

    if (add.disabled === true){
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
    
}

const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value= newValue;

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER){
        add.disabled = true
    }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
