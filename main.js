let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
const buttons = document.querySelectorAll('button');
const textArea = document.querySelector('.textArea p');

const add = function (a, b) {
    return (+a + +b).toFixed(2);
};

const subtract = function (a, b) {
    return (+a - +b).toFixed(2);
};

const divide = function (a, b) {
    return (+a / +b).toFixed(2);
};

const multiply = function (a, b) {
    return (+a * +b).toFixed(2);
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': { return add(num1, num2); break };
        case '-': { return subtract(num1, num2); break };
        case '/': { return divide(num1, num2); break };
        case '*': { return multiply(num1, num2); break };
    }
}

function display(displayValue) {
    textArea.textContent = displayValue;
}
function clearScreen() {
    textArea.textContent = "";
    displayValue = '';
    resetValues();
}
function resetValues() {
    operator = '';
    firstNumber = '';
    secondNumber = '';

}
function getResult() {
    let result = operate(operator, firstNumber, secondNumber);
    displayValue = result ? result : displayValue;
    resetValues();
    firstNumber = displayValue;
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = button.textContent;
        if (value === "=") {
            getResult();

        } else if (value === 'Clear') {
            clearScreen();
        } else {
            if (value === '-' ||
                value === '+' ||
                value === '/' ||
                value === '*') {
                if (operator) {
                    getResult();
                } operator = value;
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
