let itens = document.querySelectorAll('section#game ul li');
let resetBtn = document.querySelector('section#game input[name=reset]');
let textInput = document.querySelector('section#game input[type=text]');

resetBtn.addEventListener('click', function(){
    for(let i = 0; i < itens.length; i++){
        if(itens[i].classList.contains('used'))
            itens[i].classList.remove('used');
    }
    textInput.value = "";
});