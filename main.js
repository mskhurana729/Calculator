let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
const buttons = document.querySelectorAll('button');
const textArea = document.querySelector('.textArea p');

const add = function (a, b) {
    return +a + +b;
};

const subtract = function (a, b) {
    return +a - +b;
};

const divide = function (a, b) {
    return +a / +b;
};

const multiply = function (a, b) {
    return +a * +b;
};

// We need to create a new function operate that takes the operator which will decide which function to call and the 2 numbers on which the function will apply

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': { return add(num1, num2); break };
        case '-': { return subtract(num1, num2); break };
        case '/': { return divide(num1, num2); break };
        case '*': { return multiply(num1, num2); break };
    }
}

//we need to create a function which will display the buttons clicked and will store there value
//now we need to make the calculator work we have to store the value before an operator stored in firstNum and then we have to store the value after the operator in secondNum and when = is hit we have to send the operator and numbers to operate and then have to display the result


function display(displayValue) {
    textArea.textContent = displayValue;
}
function clearScreen() {
    textArea.textContent = "";
}
function resetValues() {
    operator = '';
    firstNumber = '';
    secondNumber = '';

}


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = button.textContent;
        if (value === "=") {
            let result = operate(operator, firstNumber, secondNumber);
            displayValue = result ? result : displayValue;
            resetValues();
            firstNumber = displayValue; // to make the result next firstNumber if user wants to do operations on that
        } else if (value === 'Clear') {
            clearScreen();
        } else {
            if (value === '-' ||
                value === '+' ||
                value === '/' ||
                value === '*') {
                operator = value;
            } else if (operator) { //if it is after an operator is clicked it will be the second number
                secondNumber += value;
            } else {
                firstNumber += value;
            }
            displayValue += button.textContent;
        }
        display(displayValue);

    })

});
