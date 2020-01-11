let send = document.querySelector('#send')
send.addEventListener('click',function() {
  let div_color = document.querySelector('.box').style.backgroundColor

  let request = new XMLHttpRequest()
  request.addEventListener('load',function() {
    let resp = JSON.parse(this.responseText)
    let div = document.querySelector('.box')
    div.innerHTML = resp.result
  })

  request.open('post','http://www.coloranalyzer.com/',true)
  request.setRequestHeader('Content-Type','application/x-www-urlencode')
  request.send(encodeForAjax({color:div_color}))
})