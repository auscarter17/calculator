const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelectorAll('.equals');

display.innerHTML = 0;

let firstNum 
let operator
let secondNum

function add(num1, num2) {
  return (num1 + num2);
};

function subtract(num1, num2) {
  return (num1 - num2);
};

function multiply(num1, num2) {
  return (num1 * num2);
}

function divide(num1, num2) {
  return (num1 / num2);
};

function calculate() {
  
}

numButtons.forEach(numButton => {
  numButton.addEventListener('click', function() {
    if (!operator) {
      if (!firstNum) {
        firstNum = numButton.id;
        display.innerHTML = numButton.id;
      } else {
        firstNum = firstNum + numButton.id;
        display.innerHTML = firstNum;
      }
    } else {
      if (!secondNum) {
        secondNum = numButton.id;
        display.innerHTML = numButton.id;
      } else {
        secondNum = secondNum + numButton.id;
        display.innerHTML = secondNum;
      }
    }
  });
});

operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', function() {
    operator = operatorButton.id;
  });
});