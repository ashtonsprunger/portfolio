let phrases = ['Hello!', 'Welcome to my portfolio.', 'My name is Ashton Sprunger.'];
let easterEggString = 'reveal';
let currentString = '';
let speed = 100;
let pause = 1000;
let delay = 1000;

let textArea = document.getElementById('message');

let totalTime = 0;

let phrase = 0;
let letter = 0;
let highestIndex = 20;


// temperary

// speed = 5;
// pause = 10;
// delay = 50;

let title = document.getElementById('changing-text');
let speakSection = document.getElementById('speak-section');


let write = () => {
    if(phrase < phrases.length){
        if(letter < phrases[phrase].length){
            if(letter === 0 && phrase < phrases.length){
                title.textContent = '';
            }
            title.textContent += phrases[phrase][letter];
            letter++;
            setTimeout(write, speed);
            totalTime += speed;
        }else{
            letter = 0;
            phrase++;
            // setTimeout(write, speed);
            setTimeout(write, pause);
            totalTime += pause;
        }
    }else{
        title.id = 'title';
        document.getElementById('title-text1').id = 'title-text2'
        document.getElementById('home-content').id = 'home-content2'
        main();
    }
}

function codeRed(){
    document.getElementById('easterButton').style.display = 'block';
}

function doIt(){
    document.getElementById('easterButton').innerText = 'FIX!';
    let elements = document.getElementsByTagName('div');
    for (var i = 0, len = elements.length; i < len; i++) {
        let current = elements[i];
        current.style.position = 'absolute';
        current.style.transition = 'all 200ms'
    }
    document.getElementById('easterButton').onclick = undo;
    randomize();
}

function undo(){
    location.reload();
}

function randomize(){
    let elements = document.getElementsByTagName('div');
    let random = Math.floor(Math.random()*elements.length)
    let top = Math.random()*50;
    let left = Math.random()*50;

    let current = elements[random];
    current.style.top = top + '%';
    current.style.left = left + '%';
    current.style.zIndex = highestIndex;
    highestIndex++;
    setTimeout(randomize, 200);
}



totalTime += delay;

let main = () => {
    document.getElementById('title-text2').addEventListener('click', e => {
        document.getElementById('body1').scrollIntoView(true);
    })
    document.getElementById('title-text2').addEventListener('mousedown', e => {
        let btn = e.target;
        btn.style.boxShadow = 'none';
        btn.style.top = '2px';
        btn.style.left = '2px';
    })
    document.getElementById('title-text2').addEventListener('mouseup', e => {
        let btn = e.target;
        btn.style.boxShadow = '2px 2px 5px black';
        btn.style.top = '0';
        btn.style.left = '0';
    })
}
window.addEventListener('scroll', e => {
    let scroll = Math.floor(e.target.scrollingElement.scrollTop);
    let number = scroll/window.innerHeight;
    let up = (scroll <= window.innerHeight);
    if(up){
        document.getElementsByTagName('nav')[0].style.backgroundColor = `rgba(0, 0, 0, ${number})`;
    }else{
        document.getElementsByTagName('nav')[0].style.backgroundColor = `rgba(0, 0, 0, 1)`;
    }
})

window.addEventListener('load', function () {
    setTimeout(write, delay);
})

$(document).on("keypress", function (e) {
    // console.log(e.which);


    if(textArea.value.length < 5){
        if(e.which == 114){
            currentString += 'r';
        }else if(e.which == 101){
            currentString += 'e';
        }else if(e.which == 118){
            currentString += 'v';
        }else if(e.which == 97){
            currentString += 'a';
        }else if(e.which == 108){
            currentString += 'l';
        }else{
            currentString += 'x'
        }
    }
    if(currentString.includes(easterEggString)){
        codeRed();
        currentString = '';
    }
});

// speakSection.addEventListener('submit', callSpeak);

// function callSpeak (e){
//     e.preventDefault();
//     speak(document.getElementById('message').value, document.getElementById('voices').value);
// }

// function speak (message, voice) {
//     var msg = new SpeechSynthesisUtterance(message);
//     var voices = window.speechSynthesis.getVoices();
//     console.log(voices[1]);
//     msg.voice = voices[voice];
//     window.speechSynthesis.speak(msg);
// }