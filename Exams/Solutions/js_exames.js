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

// 2017 - 2
// a
let images = document.querySelectorAll('div#photos ul li');

function changeSrc() {
    let img = document.querySelector('div#photos img.large');

    let src = this.getAttribute('src');

    img.setAttribute('src', 'large/' + src);
}

images.forEach(addEventListener('click', changeSrc));

// b
let load = document.querySelector('div#photos a.load');

function handleLoad(event) {
    event.preventDefault();

    let req = new XMLHttpRequest();
    req.open('get', 'getrandomimages.php', true);
    req.addEventListener('load', handleReq);
    req.send();
}

function handleReq() {
    let images = JSON.parse(this.responseText);

    let list = document.querySelector('div#photos ul');

    images.forEach(function (image) {
        let item = document.createElement('li');
        let img = document.createElement('img');
        img.setAttribute('src', image);
        item.appendChild(img);

        list.appendChild(item);
    })
}

load.addEventListener('click', handleLoad);

// 2017 - 1
// a

let links = document.querySelectorAll('div#products ul li a');

function linkHandler(event) {
    event.preventDefault();

    let quantity = parseInt(this.previousSibling.innerHTML);
    quantity++;
    this.previousSibling.innerHTML = quantity;

}

links.forEach(addEventListener('click', linkHandler));

// b

let buyLinks = document.querySelectorAll('div#products a.buy');

buyLinks.forEach(addEventListener('click', makeRequest));

function makeRequest(event) {
    event.preventDefault();

    let items = document.querySelectorAll('div#products ul li');
    let products = [];

    items.forEach(function (element) {
        let name = element.innerHTML;
        let qty = parseInt(element.children[0].innerHTML);

        products.push({
            name: name,
            qty: qty
        });
    })


    let req = new XMLHttpRequest();
    req.addEventListener('load', handleRes);
    req.open('post', 'calculatetotal.php', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax(products));
}

function handleRes() {
    let res = JSON.parse(this.responseText);
    let total = document.querySelector('div#products p.total');

    total.innerHTML = res < 0 ? 'not enough stock' : res;
}

// 2016 - 2
// a

let numbers = document.querySelectorAll('div#keypad a');

function handleNum(event) {
    event.preventDefault();

    let num = parseInt(this.innerHTML);
    let pin = document.querySelector('form#pin input[name=pin]');
    pin.value += num;
}

numbers.forEach(addEventListener('click', handleNum));

// b

let submit = document.querySelector('form#pin input[type=submit]');

function handleSubmit(event) {
    event.preventDefault();

    let username = document.querySelector('form#pin input[name=username]').value;
    let pin = document.querySelector('form#pin input[name=pin]').value;

    let req = new XMLHttpRequest();
    req.addEventListener('load', handlePin);
    req.open('post', 'verify_pin.php', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({
        username: username,
        pin: pin
    }));
}

function handlePin() {
    let ans = JSON.parse(this.responseText).value;

    if (!ans) {
        let pin = document.querySelector('form#pin input[name=pin]');
        pin.value = '';
        pin.style.border_color = red;
    }
}

submit.addEventListener('click', handleSubmit);

// 2016 - 1
// a

let pass = document.querySelector('form#register input[name=password]');

function handlePass() {
    let value = this.value;
    if (value.length < 8 || !value.match(/[\W]+/))
        this.style.border_color = 'red';
}

pass.addEventListener('focus', handlePass);

// b

let submit = document.querySelector('form#register input[type=submit]');

function handleSubmit(event) {

    let username = document.querySelector('form#register input[name=username]').value;

    let req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        let ans = JSON.parse(this.responseText).value;

        if (!ans) {
            let username = document.querySelector('form#register input[name=username]');
            username.style.border_color = red;
            event.preventDefault();

        }
    });
    req.open('post', 'verifyusername.php', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({
        username: username
    }));
}

submit.addEventListener('click', handleSubmit);

// 2015 - 2
// a

var secret = Math . floor (( Math . random () * 100) + 1) ; // generates random number
var tries = 0;

let guess = document.querySelector('input#guess');

function handleGuess(event){
    
    let value = document.querySelector('input[name=guess]').value;

    if(value < secret){
        alert('go up');
    }
    else if (value > secret){
        alert('go down');
    }
    else{
        correct();
    }

    tries++;
}

// b

function correct(){
    alert('correct');

    let username = document.querySelector('input[name=username]').value;

    let req = new XMLHttpRequest();
    req.open('post', 'save_score.php', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({username: username, tries: tries}));
}

guess.addEventListener('click', handleGuess);

// 2015 - 1
// a

let copy = document.querySelector('button#copy');

function handleCopy(){
    let input = document.querySelector('input[name=color]').value;
    let div = document.querySelector('div.box');
    div.style.background_color = input;
}

copy.addEventListener('click', handleCopy);

// b

let send = document.querySelector('button#send');

function handleSend(){

    let color = document.querySelector('div.box').style.background_color;

    let req = new XMLHttpRequest();
    req.addEventListener('load', handleColor);
    req.open('post', 'http://www.coloranalyzer.com/', true);
    req.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    req.send(encodeForAjax({color: color}));
}

function handleColor(){
    let res = JSON.parse(this.responseText).result;

    let div = document.querySelector('div.box');
    div.innerHTML = res;
}

send.addEventListener('click', handleSend);

function encodeForAjax(data) {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}