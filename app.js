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
      firstValue = undefined
      secondValue = undefined
      operator = undefined
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
        firstValue = e.target.id
        display.textContent = firstValue
      } else if (firstValue) {
        if (!operatorValue) {
          firstValue = (firstValue + e.target.id)
          display.textContent = firstValue
        } else if (operatorValue && !secondValue) {
          secondValue = e.target.id
          display.textContent = secondValue
        } else if (operatorValue && secondValue) {
          secondValue = (secondValue + e.target.id)
          display.textContent = secondValue
        }
      }
    }
    
  })
}