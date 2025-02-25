const btns = document.querySelectorAll('button')
const display = document.getElementById('display')
let numberKeys = document.querySelectorAll('.number')
let operatorKeys = document.querySelectorAll('.operator')

// create variables to store numbers and operators from key presses
let firstValue
let secondValue
let operatorValue

// create variable for values to be stored in display
let currentValue = 0

display.textContent = currentValue

// seperate buttons from btns...querySelectorAll and act on them as individuals
for (let btn of btns) {
  btn.addEventListener('click', function(e) {

    // use class to see if key is button, operator, or clear
    btnType = e.target.className

    // if clear button is selected, always reset display and clear all values
    if (btnType === "clear") {
      reset()
      currentValue = 0
      display.textContent = currentValue

    // if key press is operator key, check for other numbers present  
    } else if (btnType === 'operator') {
      if (firstValue) {
        operatorValue = e.target.id
        console.log(operatorValue)
      }
    } else if (btnType === 'number') {
      // if no other numbers have been pressed, assign number to first value
      if (!firstValue) {
        firstValue = e.target.id.toString()
        display.textContent = firstValue

      // what to do if a number has already been pressed
      } else if (firstValue) {

        // if a number has already been pressed, but not an operator, new number will be continuation of first (5, then 5, is 55 etc)  
        if (!operatorValue) {
          firstValue = (firstValue + e.target.id)
          display.textContent = firstValue

        // if an operator has been pressed, hitting a number begins the second number in equation  
        } else if (operatorValue && !secondValue) {
          secondValue = e.target.id.toString()
          display.textContent = secondValue

        // if an operator is assigned and at least two numbers are pressed, it will continue the second number
        } else if (operatorValue && secondValue) {
          secondValue = (secondValue + e.target.id)
          display.textContent = secondValue
        }
      }
    } else if (btnType === 'equal') {
      operate()
    }
    
  })
}

function operate() {
  if (operatorValue === "/" && secondValue === "0") {
    display.textContent = "YOU FOOL"
  } else if (!operatorValue || !secondValue) {
    reset()
    display.textContent = "E"
  } else {
    if (operatorValue === "+") {
      currentValue = parseInt(firstValue) + parseInt(secondValue)
    } else if (operatorValue === "-") {
      currentValue = parseInt(firstValue) - parseInt(secondValue)
    } else if (operatorValue === "*") {
      currentValue = parseInt(firstValue) * parseInt(secondValue)
    } else if (operatorValue === "/") {
      currentValue = parseInt(firstValue) / parseInt(secondValue)
    }
    console.log(firstValue + operatorValue + secondValue)
    display.textContent = Number(Math.round(currentValue * 1000) / 1000)
    firstValue = currentValue
    operatorValue = undefined
    secondValue = undefined
  }
}

function reset() {
  firstValue = undefined
  secondValue = undefined
  operatorValue = undefined
}