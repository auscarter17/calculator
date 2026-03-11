let firstNum
let operator
let secondNum

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