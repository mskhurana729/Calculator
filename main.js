const buttons = document.querySelectorAll('button');
const textArea = document.querySelector('.textArea p');
const decimalButton = document.querySelector('.decimal');
let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
let isDecimal = '';

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
    if (operator === '/' && firstNumber === '0') { //to stop crashing
        resetValues();
        displayValue = 'ERROR';
    } else {
        let result = operate(operator, firstNumber, secondNumber);
        displayValue = result ? result : displayValue;
        resetValues();
        firstNumber = displayValue;
    }
}
function displayDecimalButton(isDecimal) {
    isDecimal ? decimalButton.style.display = 'none' : decimalButton.style.display = 'inline';
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // let isFirstNumberDecimal = false;
        // let isSecondNumberDecimal = false;

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
                isDecimal = false;
            } else if (operator) { //if it is after an operator is clicked it will be the second number
                if (value === '.') {
                    isDecimal = true;

                }
                secondNumber += value;
            } else {
                if (value === '.') {
                    isDecimal = true;

                }
                firstNumber += value;
            }

            displayValue = firstNumber + operator + secondNumber;
        }
        display(displayValue);
        displayDecimalButton(isDecimal);

    })

});
