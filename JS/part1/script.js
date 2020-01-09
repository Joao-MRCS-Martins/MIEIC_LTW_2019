const form = document.getElementsByTagName('form')[0]//.outerHTML
// console.log(form)
// const input = document.querySelector('form label:nth-child(2) input')
// const inputs = document.querySelectorAll('form input')

// console.log(form)
// console.log(input)
// inputs.forEach(input => {
//   console.log(input.outerHTML)
// })

form.addEventListener('submit', function (event) {
  let row = document.createElement('tr')
  const descr = document.querySelector('form input[name=description]').value
  const quantity = document.querySelector('form input[name=quantity]').value
  row.innerHTML = `<tr><td>${descr}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"></td></tr>`
  let table = document.querySelector('#products')
  table.append(row)
  updateTotal()

  let inputQnt = row.querySelector('td:nth-child(2) input')
  inputQnt.addEventListener('change', updateTotal)

  let remBtn = row.querySelector('input[type=button]')
  remBtn.addEventListener('click', function () {
    this.parentNode.parentNode.remove()
    updateTotal()
  })

  event.preventDefault()
})

function updateTotal() {
  const items = document.querySelectorAll('table tr td:nth-child(2) input')
  let total = 0
  items.forEach(input => {
    total += parseInt(input.value)
  })

  let totalSpan = document.querySelector('#total')
  totalSpan.innerHTML = total
}