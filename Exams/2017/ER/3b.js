let load_lnk = document.querySelector('#photos .load')
load_lnk.addEventListener('click',makeRequest)

function makeRequest() {
  event.preventDefault()
  let request = new XMLHttpRequest()
  request.addEventListener('load',handleResponse)
  request.open('GET','getrandomimages.php',true)
  request.send()
}

function handleResponse() {
  let response = JSON.parse(this.responseText)

  response.array.forEach(resp => {
    let img = document.createElement('img')
    img.src = resp
    let new_item = document.createElement('li')
    new_item.innerHTML = img
    document.querySelector('#photos ul').appendChild(new_item)
  });
}