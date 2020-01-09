let commentForm = document.querySelector('#comments form')
commentForm.addEventListener('submit', submitComment)

function submitComment(event) {
  let newsID = commentForm.querySelector('form input[name="id"]').value
  let username = commentForm.querySelector('form input[name="username"]').value
  let text = commentForm.querySelector('form textarea').value
  let commID = document.querySelector('#comments .comment') != null ? document.querySelector('#comments .comment:last-of-type span.id').textContent : 0
  console.log('news id: ',newsID)
  console.log('user: ',username)
  console.log('text: ',text)
  console.log('comment id: ',commID)

  //stopped at ex5
  event.preventDefault()
}


