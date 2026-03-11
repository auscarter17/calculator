let firstNum
let operator
let secondNum
let result = 0

const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.btn')

display.textContent = result

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function divide(num1,num2) {
  return num1 / num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function operate(firstNum, operator, secondNum) {
  if (operator === "+") {
    add(firstNum, secondNum)
  } else if (operator === "-") {
    subtract(firstNum, secondNum)
  } else if (operator === "x") {
    multiply(firstNum, secondNum)
  } else if (operator === "/") {
    divide(firstNum, secondNum)
  }
}

function checkForNumber(input) {
  if (typeof parseInt(input) === 'number') {
    return true
  }
}

function clickHandler(input) {
  if (!firstNum) {
    if (checkForNumber(input)) {
      firstNum = input
      display.textContent = firstNum
    }
  } else if (firstNum) {
    if (checkForNumber(input)) {
      firstNum = firstNum + input
      display.textContent = firstNum
    }
  }
  
}

buttons.forEach(button => {
  button.addEventListener('click', function() {
    clickHandler(button.textContent)
  })
})