let divs = document.querySelectorAll('body div')
divs.forEach(div => {
  div.addEventListener('mouseover',getNextColor)
  div.addEventListener('mouseout',resetColor)
})

var old_color;
function getNextColor() {
  const next_id = getNextId(this.id)
  const div = document.getElementById(next_id)
  old_color = window.getComputedStyle(this).backgroundColor
  const color = window.getComputedStyle(div).backgroundColor
  this.style.backgroundColor = color
}

function getNextId(id) {
  switch(id) {
    case 'a1':
      return 'b1'
    case 'b1':
      return 'c1'
    case 'c1':
      return 'd1'
    case 'd1':
      return 'a1'
  }
}

function resetColor() {
  this.style.backgroundColor = old_color
}