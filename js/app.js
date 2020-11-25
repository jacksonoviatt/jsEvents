let headerButton = document.querySelector('.header-button');
let header = document.querySelector('.header');

function styleHeader() {
    header.style.backgroundColor = 'blue';
    header.style.height = '100px';
    header.style.width = '100vw';
}

headerButton.addEventListener('click', styleHeader);

let banana = document.querySelector('.bananas');

function styleBanana() {
    banana.style.backgroundColor = 'yellow';
}

banana.addEventListener('mouseover', styleBanana);

let coconut = document.querySelector('.coconuts');

function styleCoconut() {
    coconut.style.backgroundColor = 'pink';
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        styleCoconut();
    }
}