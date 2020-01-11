function correct() {
  alert('correct')

  let user = document.querySelector('input[name]="username"').node

  let request = new XMLHttpRequest()
  request.addEventListener('load',function() {
    let resp = JSON.parse(this.responseText)

    if(resp) {
      alert('succefully saved score')
    }
  })
  request.open('POST','save_score.php',true)
  request.setRequestHeader('Content-Type','x-www-urlencoded')
  request.send(encodeForAjax({username:user,tries:tries}))
}