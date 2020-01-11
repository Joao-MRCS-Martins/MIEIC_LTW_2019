let numbers = document.querySelectorAll('#keypad a')
numbers.forEach(number => {
  number.addEventListener('click',function() {
    let num = number.innerHTML
    let pin = document.querySelector('#pin input[name="pin"]')
    pin.value += num
  })
})