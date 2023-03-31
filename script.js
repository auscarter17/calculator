const display = document.querySelector('.display');

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