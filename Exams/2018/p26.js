let itens = document.querySelectorAll('section#game ul li');
let textInput = document.querySelector('section#game input[type=text]');

for(let i = 0; i < itens.length; i++) {
    itens[i].addEventListener('click', function(){
        if(!itens[i].classList.contains('used')){
            itens[i].classList.add('used');
            textInput.value += itens[i].innerHTML;
        }
    });
}