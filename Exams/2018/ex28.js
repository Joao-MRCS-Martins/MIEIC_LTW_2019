let send = document.querySelector('#game input[name="send"]')
send.addEventListener('click',function() {
  let guess = document.querySelector('#game input[name="guess"]')
  let request = new XMLHttpRequest()
  request.addEventListener('load',function() {
    let resp = JSON.parse(this.responseText)
    if(resp.request == 'wrong') {
      alert('WRONG')
    } else if(resp.request == 'correct') {
      guess.value = ''
      let new_letters = resp.word
      createNewList(new_letters)
    }
  })
  request.open('POST','is_guess_correct.php',true)
  request.setRequestHeader('Content-Type','application/x-www-urlencoded')
  request.send(encodeForAjax({guess:guess.value}))
})

function createNewList(letters) {
  let new_list = document.createElement('ul')
  letters.forEach(letter => {
    let item = document.createElement('li')
    item.innerHTML = letter
    item.addEventListener('click',addLetter)
    new_list.appendChild(item)
  }) 
  let old_list = document.querySelector('#game ul')
  document.querySelector('#game').replaceChild(new_list,old_list)
}