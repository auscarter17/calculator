const btns = document.querySelectorAll('button')
const display = document.getElementById('display')
let numberKeys = document.querySelectorAll('.number')
let operatorKeys = document.querySelectorAll('.operator')

// create variables to store numbers and operators from key presses
let firstValue = 10
let secondValue = 10
let operator

// create variable for values to be stored in display
let currentValue = 100

display.textContent = currentValue

// seperate buttons from btns...querySelectorAll and act on them as individuals
for (let btn of btns) {
  btn.addEventListener('click', function(e) {

    // use class to see if key is button, operator, or clear
    btnType = e.target.className

    // if clear button is selected, always reset display and clear all values
    if (btnType = clear) {
      console.log(btnType)
      firstValue = undefined
      secondValue = undefined
      operator = undefined
      currentValue = 0
      display.textContent = currentValue
    }
    
  })
}