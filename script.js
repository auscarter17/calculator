const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const numButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

display.innerHTML = 0;

let firstNum 
let operator
let secondNum

function add(firstNum, secondNum) {
  // variables will concatenate without parseFloat in place
  return ((parseFloat(firstNum) + parseFloat(secondNum)).toFixed(2));
};

function subtract(firstNum, secondNum) {
  return ((firstNum - secondNum).toFixed(2));
};

function multiply(firstNum, secondNum) {
  return ((firstNum * secondNum).toFixed(2));
}

function divide(firstNum, secondNum) {
  return ((firstNum / secondNum).toFixed(2));
};

function clear() {
  firstNum = null
  operator = null
  secondNum = null
}

clearButton.addEventListener('click', function() {
  clear();
  display.innerHTML = 0;
});

equalsButton.addEventListener('click', calculate);

function calculate() {
  if (!firstNum || !secondNum || !operator) {
    display.innerHTML = "Error";
  } else if (operator === 'times') {
    display.innerHTML = multiply(firstNum, secondNum)
  } else if (operator === 'plus') {
    display.innerHTML = add(firstNum, secondNum)
  } else if (operator === 'minus') {
    display.innerHTML = subtract(firstNum, secondNum)
  } else if (operator === 'divide') {
    display.innerHTML = divide(firstNum, secondNum)
  }
};

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
    } else if (operator) {
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
    if (!firstNum) {
      display.innerHTML = "Error"
      clear();
    } else if (firstNum && secondNum && operator) {
      calculate();
      firstNum = display.innerHTML;
      secondNum = null;
      operator = operatorButton.id;
    } else {
      operator = operatorButton.id;
      console.log(operator);
    }
  });
});