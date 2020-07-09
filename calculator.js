function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b);
}

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);     
    } else if (operator === "/") {
        return divide(a, b);
    }    
}

//DOM number variables
const num0 = document.querySelector('.but-0');
const num1 = document.querySelector('.but-1');
const num2 = document.querySelector('.but-2');
const num3 = document.querySelector('.but-3');
const num4 = document.querySelector('.but-4');
const num5 = document.querySelector('.but-5');
const num6 = document.querySelector('.but-6');
const num7 = document.querySelector('.but-7');
const num8 = document.querySelector('.but-8');
const num9 = document.querySelector('.but-9');

// DOM operator variables
const plusSign = document.querySelector('.but-add');
const minusSign = document.querySelector('.but-subtract');
const timesSign = document.querySelector('.but-multiply');
const divideSign = document.querySelector('.but-divide');
const equalSign = document.querySelector('.but-equals');
const clearBut = document.querySelector('.but-clear');

const numbers = document.getElementById('num-container');

// numbers.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) {
//         return;
//     }
//     console.log(event.target.innerHTML);
// })

const display = document.querySelector('.display');
const para = document.createElement("p");
const parameters = [];


document.querySelectorAll('.but').forEach(item => {
    item.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        const numButton = document.getElementById('num');
        if (!isButton) {
            return;
        }
        para.innerText += event.target.innerHTML;
        display.appendChild(para);
        parameters.push(para.innerText);
    })
})

