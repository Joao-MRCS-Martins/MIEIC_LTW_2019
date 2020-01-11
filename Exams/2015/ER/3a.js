var secret = Math.floor((Math.random() * 100) + 1)
var tries = 0;

let guessBtn = document.querySelector('#guess')
guessBtn.addEventListener('click',function() {
  let guess = document.querySelector('input[name="guess"]')
  guess = parseInt(guess.value)
  if(guess < secret) {
    alert('go up')
  } else if(guess > secret) {
    alert('go down')
  } else {
    correct()
  }
  tries++
})