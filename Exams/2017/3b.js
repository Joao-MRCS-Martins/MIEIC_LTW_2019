let buyBtn = document.querySelector('#products a.buy')
buyBtn.addEventListener('click',sendRequest)

function sendRequest() {
  let items = document.querySelectorAll('#products ul li')
  let products = []
  items.forEach(item => {
    let name = item.innerHTML
    name = name.split(':')[0]
    let qty = parseInt(item.children[0].innerHTML)

    products.push({
      name:name,
      qty:qty
    })
  })
  
  let request = new XMLHttpRequest()
  request.addEventListener('load',updateTotal)
  request.open('POST','calculatetotal.php',true)
  request.setRequestHeader('Content-Type','x-www-form-urlencoded')
  request.send(encodeForAjax(products))
  
  event.preventDefault()
}

function updateTotal() {
  let resp = JSON.parse(this.responseText)
  let total = document.querySelector('.total')
  total.innerHTML = resp >= 0 ? resp : 'not enough stock'
}


function encodeForAjax(data) {
  return Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
}