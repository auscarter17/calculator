const btns = document.querySelectorAll('button')

for (let btn of btns) {
  btn.addEventListener('click', function(e) {
    console.log(e.target.id)
  })
}