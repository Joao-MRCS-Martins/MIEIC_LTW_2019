let reset = document.querySelector('#game input[name="reset"]')
reset.addEventListener('click',function() {
  let items = document.querySelectorAll('#game ul li')
  items.forEach(item => {
    item.class = ''
  })

  let guess = document.querySelector('#game input[name="guess"]')
  guess.value = ''
})