let copy = document.querySelector('#copy')
copy.addEventListener('click',function() {
  let color_hex = document.querySelector('input[name="color"]').value
  let box = document.querySelector('.box')
  box.style.backgroundColor = color_hex
})