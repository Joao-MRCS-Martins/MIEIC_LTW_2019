let list_items = document.querySelectorAll('#products ul li')
list_items.forEach(item => {
  let link = item.querySelector('a')
  link.addEventListener('click', function(event) {
    let qty = item.querySelector('span.qty')

    let value = parseInt(qty.innerHTML)
    qty.innerHTML = value +1
    event.preventDefault()
  })
})