let items = document.querySelectorAll('#game ul li')
items.forEach(item => {
  item.addEventListener('click',addLetter)
})

function addLetter() {
  if(this.class !== 'used') {
    this.class = 'used'
    let text = document.querySelector('#game input[name="guess"]')
    text.value += this.innerHTML
  }
}