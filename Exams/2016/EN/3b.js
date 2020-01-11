let submit = document.querySelector('#register input[type="submit"]')
submit.addEventListener('click',sendRequest)

function sendRequest(event) {
  let user = document.querySelector('#register input[name="username"]').value
  let content = {
    username:user
  }

  let request = new XMLHttpRequest()
  request.addEventListener('load',function() {
    let response = JSON.parse(this.responseText).value
    if(!response) {
      let user = document.querySelector('#register input[name="username"]').value
      user.style.border = 'solid red'
      event.preventDefault()
    }
  })
  request.open('post','verifyusername.php',true)
  request.setRequestHeader('Content-Type','application/x-www-form-urlencode')
  request.send(encodeForAjax(content))  
}