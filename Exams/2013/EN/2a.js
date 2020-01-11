let divs = document.querySelectorAll('body div')
divs.forEach(div => {
  div.addEventListener('click',changeColor)
})

function changeColor() {
  const id = this.id

  let request = new XMLHttpRequest()
  request.addEventListener('load',handleResp)
  request.open('get','http://getcolor.com/?' + encodeForAjax({id:id}),true)
  request.send()
}

function handleResp() {
  const resp = JSON.parse(this.responseText)
  const id = resp.id
  const color = resp.color

  const div = document.getElementById(id)
  div.style.backgroundColor = color
}