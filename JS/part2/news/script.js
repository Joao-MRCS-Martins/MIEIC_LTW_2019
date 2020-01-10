let commentForm = document.querySelector('#comments form')
commentForm.addEventListener('submit', submitComment)

function submitComment(event) {
  let newsID = commentForm.querySelector('form input[name="id"]').value
  let username = commentForm.querySelector('form input[name="username"]').value
  let text = commentForm.querySelector('form textarea').value
  let commID = document.querySelector('#comments .comment') != null ? document.querySelector('#comments .comment:last-of-type span.id').textContent : 0

  let request = new XMLHttpRequest()
  request.addEventListener('load',receiveComments)
  request.open('POST','api_add_comment.php',true)
  request.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
  request.send(encodeForAjax({id: newsID, comment_id: commID, username: username, text: text}))
  event.preventDefault()
}

function receiveComments() {
  let commentSection = document.querySelector('#comments')
  let comments = JSON.parse(this.responseText)
  comments.forEach(comment => {
    let newComment = document.createElement('article')
    newComment.classList.add('comment')
    newComment.innerHTML = '<span class="id">' + comment.id + 
    '</span><span class="user">' + comment.name + '</span><span class="date">' +
    new Date(comment.published * 1000).toLocaleDateString() + ' ' +
    new Date(comment.published * 1000).toLocaleTimeString() + '</span><p>' +
    comment.text + '</p>'

    commentSection.insertBefore(newComment,commentForm)
  });
}

function encodeForAjax(data) {
  return Object.keys(data).map(function(k){
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&');
}