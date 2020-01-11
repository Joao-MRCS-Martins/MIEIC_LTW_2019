let submit = document.querySelector('#pin input[type="submit"]')
submit.addEventListener('click',verifyData)

function verifyData() {
  let username = document.querySelector('#pin input[name="username"]').value
  let pin = document.querySelector('#pin input[name="pin"]').value

  let request = new XMLHttpRequest()
  request.addEventListener('load',handleResponse)
  request.open('POST','verify_pin.php',true)
  request.setRequestHeader('Content-Type','application/x-www-urlencode')
  request.send(encodeForAjax({username:username,pin:pin}))
}

function handleResponse() {
  let response = JSON.parse(this.responseText)
  if(!response.valid) {
    let pin = document.querySelector('#pin input[name="pin"]')
    pin.style.border = 'solid red'
    pin.value = ''
  }
}