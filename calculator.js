function add(a, b) {
    return (+(a) + +(b));
}

function subtract(a, b) {
    return (+(a) - +(b));
}

function multiply(a, b) {
    return (+(a) * +(b));
}

function divide(a, b) {
    if (b == 0) {
        return "Can't divide by zero";
    } else {
        return (+(a) / +(b));
    }    
}

function operate(a, operator, b) {
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


const display = document.querySelector('.display');
const para = document.createElement("p");
let numberArray = [];
let operatorArray = [];
let operator;
let total;
let totalDisplay;


// listener event for clicking buttons 
document.querySelectorAll('.but').forEach(item => {
    item.addEventListener('click', (event) => { 
        const isButton = event.target.nodeName === 'BUTTON';
        const numButton = event.target.id === "num";
        const oprButton = event.target.id === "operator";
        const clearButton = event.target.id === "clear";
        const equalsButton = event.target.id === "equals";
        const decimalButton = event.target.id === "decimal";
        const backButton = event.target.id === "backspace";

        if (!isButton) {
            return;

        }  else if (numButton && operator == true) {

            display.removeChild(para);
            para.innerText = event.target.innerHTML;
            display.appendChild(para);
            operator = false;

        }  else if (numButton) {
            
            para.innerText += event.target.innerHTML;
            display.appendChild(para); 

        }  else if (oprButton) {

            numberArray.push(para.innerText);
            operatorArray.push(event.target.value);
            operator = true;

               if (numberArray.length == 2) {
                  
                  total = operate(numberArray[0], operatorArray[0], numberArray[1]);

                  if (total % 1 != 0) {

                    totalDisplay = total.toFixed(2);
                    para.innerText = totalDisplay;
                    numberArray = [];
                    numberArray.push(totalDisplay);
                    operatorArray.shift();
                    total = undefined;

                  } else {
   
                    para.innerText = total;
                    numberArray = [];
                    numberArray.push(total);
                    operatorArray.shift();
                    total = undefined;

                  }
            }

        }  else if (clearButton) {
            
            display.removeChild(para);
            para.innerText = '';
            numberArray = [];
            operatorArray = [];
            operator = false;

        }  else if (equalsButton) {
            
            numberArray.push(para.innerText);
            total = operate(numberArray[0], operatorArray[0], numberArray[1]);

            if (total % 1 != 0 && typeof total == "number")  {

                totalDisplay = total.toFixed(2);
                para.innerText = totalDisplay;
                numberArray = [];
                operatorArray = [];
                total = undefined;
                operator = true;

            } else {

                para.innerText = total;
                numberArray = [];
                operatorArray = [];
                total = undefined;
                operator = true;

            }
        }  else if (decimalButton && operator == true) {

            display.removeChild(para);
            para.innerText = event.target.innerHTML;
            display.appendChild(para);
            operator = false;

        }  else if (decimalButton && para.innerText.indexOf('.') == -1) {

            para.innerText += event.target.innerHTML;
            display.appendChild(para); 

        }  else if (backButton) {

            para.innerText = para.innerText.slice(0, -1);

        }    
    })
});



// listener for keypad support
document.addEventListener('keyup', (event) => {
    
    let oprKeyArray = [106, 107, 109, 111];
    let decimalKey = 110; 
    let enterKey = 13;
    let backspaceKey = 8;
    let anyButton = document.querySelectorAll('button');

    anyButton.forEach(element => element.blur());    



    if (event.keyCode >= 96 && event.keyCode <= 105 && operator == true) {

        display.removeChild(para);
        para.innerText = event.key;
        display.appendChild(para);
        operator = false;

    }  else if (event.keyCode >= 96 && event.keyCode <= 105) {

        para.innerText += event.key;
        display.appendChild(para); 

    } 
        else if (oprKeyArray.indexOf(event.keyCode) !== -1) {

            numberArray.push(para.innerText);
            operatorArray.push(event.key);
            operator = true;

            if (numberArray.length == 2) {
                    
                total = operate(numberArray[0], operatorArray[0], numberArray[1]);

                if (total % 1 != 0) {

                totalDisplay = total.toFixed(2);
                para.innerText = totalDisplay;
                numberArray = [];
                numberArray.push(totalDisplay);
                operatorArray.shift();
                total = undefined;

                } else {
    
                para.innerText = total;
                numberArray = [];
                numberArray.push(total);
                operatorArray.shift();
                total = undefined;

                }
        }

    }  else if (event.keyCode == enterKey) {
            
        numberArray.push(para.innerText);
        total = operate(numberArray[0], operatorArray[0], numberArray[1]);

        if (total % 1 != 0 && typeof total == "number")  {

            totalDisplay = total.toFixed(2);
            para.innerText = totalDisplay;
            numberArray = [];
            operatorArray = [];
            total = undefined;
            operator = true;

        } else {

            para.innerText = total;
            numberArray = [];
            operatorArray = [];
            total = undefined;
            operator = true;

        }
    }  else if (event.keyCode == decimalKey && operator == true) {

        display.removeChild(para);
        para.innerText = event.key;
        display.appendChild(para);
        operator = false;

    }  else if (event.keyCode == decimalKey && para.innerText.indexOf('.') == -1) {

        para.innerText += event.key;
        display.appendChild(para); 

    }  else if (event.keyCode == backspaceKey) {

        para.innerText = para.innerText.slice(0, -1);

    }   


});