let pass_input = document.querySelector('#register input[type="password"]')
pass_input.addEventListener('blur',checkPass)

function checkPass(event) {
  let pass = event.target.value
  if(pass.length < 8 && pass.match(/\W/) == null) {
    this.style.border = 'solid red'
  } else {
    this.style.border = 'initial'
  }
}