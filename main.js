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
        case '+': { return add(num1, num2); break };
        case '-': { return subtract(num1, num2); break };
        case '/': { return divide(num1, num2); break };
        case '*': { return multiply(num1, num2); break };
    }
}