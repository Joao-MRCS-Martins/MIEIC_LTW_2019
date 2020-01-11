// 2018
// 26

let itens = document.querySelectorAll('#game ul li');
let textInput = document.querySelector('#game input[type=text]');

function listener() {
    let className = this.className;

    if(!className.match(/used/)){
        className+= ' used';

        textInput.value+=this.innerHTML;
    }
}

itens.forEach(addEventListener('click', listener));

// 27
let reset = document.querySelector('#game input[name=reset]');

function handleReset(){
    itens.forEach(function(element){
        let className = element.className;

        className.replace(/used/, '');
    })

    textInput.value = '';
}

reset.addEventListener('click', handleReset);

// 28

let send = document.querySelector('#game input[name=send]');

function handleSend(){

    let req = new XMLHttpRequest();
    req.addEventListener('load', handleRes);
    req.open('post', 'is_guess_correct.php', true);
    req.send(encodeForAjax({guess: textInput.value}));
}

function handleRes(){
    let res = JSON.parse(this.responseText);

    if(res.result === 'wrong'){
        alert("WRONG");
    }
    else {
        textInput.value = '';
        let ul = document.querySelector('#game ul');

        itens.forEach(function(element){
            ul.removeChild(element);
        })

        res.word.forEach(function(element){
            let li = document.createElement('li');
            li.innerHTML = element;

            ul.appendChild(li);

        })
    }
}

send.addEventListener('click', handleSend);

