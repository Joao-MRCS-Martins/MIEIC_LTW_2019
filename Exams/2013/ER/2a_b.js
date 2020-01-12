let divs = document.querySelectorAll('body div')
divs.forEach(div => {
  div.addEventListener('click',createDiv)
  div.addEventListener('mouseover',switchColor)
})

function createDiv() {
  const color = window.getComputedStyle(this).backgroundColor//this.style.backgroundColor
  let new_div = document.createElement('div')
  new_div.style.backgroundColor = color
  
  let request = new XMLHttpRequest()
  request.addEventListener('load',function() {
    const response = JSON.parse(this.responseText)
    new_div.innerHTML = response.text
    new_div.id = response.rid
    new_div.addEventListener('click',createDiv)
    new_div.addEventListener('mouseover',switchColor)
    let body = document.querySelector('body')
    body.appendChild(new_div) 
  })
  request.open('GET','http://getrandomtext.com/',true)
  request.send()
}

function switchColor() {
  let body = document.querySelector('body')
  const body_color = window.getComputedStyle(body).backgroundColor//body.style.backgroundColor

  body.style.backgroundColor = window.getComputedStyle(this).backgroundColor//this.style.backgroundColor
  this.style.backgroundColor = body_color
}