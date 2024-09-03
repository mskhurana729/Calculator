const buttons = document.querySelectorAll('button');
const textArea = document.querySelector('.textArea p');
const decimalButton = document.querySelector('.decimal');
let firstNumber = '';
let operator = '';
let secondNumber = '';
let displayValue = '';
let isDecimal = '';

const add = function (a, b) {
    let result = (+a + +b);
    if (!decimalNumber(result)) {

        isDecimal = false;
        return result;

    } else {
        isDecimal = true;
        return result.toFixed(2);
    }


};

const subtract = function (a, b) {
    let result = (+a - +b);
    if (!decimalNumber(result)) {

        isDecimal = false;
        return result;

    } else {
        isDecimal = true;
        return result.toFixed(2);
    }
};

const divide = function (a, b) {
    let result = (+a / +b);
    if (!decimalNumber(result)) {

        isDecimal = false;
        return result;

    } else {
        isDecimal = true;
        return result.toFixed(2);
    }
};

const multiply = function (a, b) {
    let result = (+a * +b);
    if (!decimalNumber(result)) {

        isDecimal = false;
        return result;

    } else {
        isDecimal = true;
        return result.toFixed(2);
    }

};


function operate(operator, num1, num2) {
    switch (operator) {
        case '+': { return add(num1, num2); break };
        case '-': { return subtract(num1, num2); break };
        case '/': { return divide(num1, num2); break };
        case 'x': { return multiply(num1, num2); break };
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
    isDecimal = '';

}
function displayError() {
    resetValues();
    displayValue = 'ERROR';
}
function decimalNumber(num) {
    return !(Number.isInteger(+num));
}

function getResult() {
    if (operator === '/' && firstNumber === '0' || firstNumber === '.' || secondNumber === '.') { //to stop crashing
        displayError();
    } else {

        let result = operate(operator, firstNumber, secondNumber);
        displayValue = result ? result : displayValue;
        resetValues();
        firstNumber = displayValue;
        isDecimal = decimalNumber(result);
    }
}
function displayDecimalButton(isDecimal) {
    isDecimal ? decimalButton.style.display = 'none' : decimalButton.style.display = 'inline';
}
function backspace(num) {
    num = `${num}`;
    num = num.split('');
    num.splice((num.length - 1), 1);
    if (num[num.length - 1] === '.') { //if last character is '.' it will remove it to make it look good
        num.splice((num.length - 1), 1);
    }
    num = num.join('');
    return num;
}
function calculator(e) {
    let value = e.target.textContent;
    if (value === "=") {
        getResult();
    } else if (value === 'AC') {
        clearScreen();
    } else {
        if (value === '-' ||
            value === '+' ||
            value === '/' ||
            value === 'x') {
            if (operator) {
                getResult();
            } operator = value;
            isDecimal = false;
        } else if (operator) { //if it is after an operator is clicked it will be the second number
            if (value === '.') {
                isDecimal = true;

            }
            if (value === 'CE') {
                secondNumber = backspace(secondNumber);
                isDecimal = decimalNumber(secondNumber);
                console.log(isDecimal);

            }
            if (!(value === 'CE')) {
                secondNumber += value;
            }
        } else {
            if (value === '.') {
                isDecimal = true;

            }
            if (value === 'CE') {

                firstNumber = backspace(firstNumber);
                console.log(firstNumber);
                isDecimal = decimalNumber(firstNumber);
                console.log(isDecimal);

            }
            if (!(value === 'CE')) {
                firstNumber += value;
            }
        }

        displayValue = firstNumber + operator + secondNumber;
    }
    displayDecimalButton(isDecimal);
    display(displayValue);


}
// we need to add a functionality when backspace is clicked they can undo the last number entered
buttons.forEach(button => button.addEventListener('click', (e) => calculator(e)));
