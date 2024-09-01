let firstNumber = 0;
let operator = '';
let secondNumber = 0;


const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const divide = function (a, b) {
    return a / b;
};

const multiply = function (array) {
    return array.reduce((product, current) => product * current)
};

// We need to create a new function operate that takes the operator which will decide which function to call and the 2 numbers on which the function will apply

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': add(num1, num2); break;
        case '-': subtract(num1, num2); break;
        case '/': divide(num1, num2); break;
        case '*': multiply(num1, num2); break;
    }
}