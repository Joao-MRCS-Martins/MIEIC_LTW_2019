let game_id = document.querySelector('#tic-tac-toe').data-id
let request = new XMLHttpRequest()
request.addEventListener('load',handleMove)
request.open('POST','play.php',true)
request.setRequestHeader('Content-Type','x-www-urlencoded')
request.send(encodeForAjax({id:game_id}))

function handleMove() {
  let resp = JSON.parse(this.responseText)

  let state = document.querySelector('#state')
  state.innerHTML = resp.state

  let squares = document.querySelectorAll('#tic-tac-toe div')
  for(let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = resp.squares[i]
  }
}