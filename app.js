const shipParts = document.querySelectorAll('.ship');
const wordGuessed = document.getElementById('word');
const playAgain = document.getElementById('play-again');
const letterUsed = document.getElementById('wrong-letters');
const message = document.getElementById('result-message');
const alertC = document.getElementById('alert')
const footerContainer = document.getElementById('footer-container');
const shadow = document.getElementById('shadow');
const buttons = document.querySelectorAll('.category');
const modal = document.getElementById('modal')

// const space = document.getElementById('space');
const space = ['area', 'location', 'place', 'distance', 'spacetime', 'blank', 'aerospace',
'expanse', 'infinite', 'time', 'vacuum', 'workspace', 'airspace', 'spacecraft', 'spaceship', 'orbit', 'physics', 'void', 'crawlspace', 'crenel', 'universe', 'emptiness', 'quad','swath','observation','satellite','spaceward','set','plane','planet','spacefaring','sputnik','shuttle','earth','astronaut','building','storage','satellites','room','starship','hubble','sphere','elbowroom','moon','pi','cyberspace','linear','dimension','continuum','spacer','interspace','philosopher','spatial','timaeus','plato','socrates','aristotle','paint','separation','type','position','attribute','vacancy','hole','stave','character','indenture','country','indentation','cavity','flies','seat','stardust'];



console.log(buttons);
//working with the modal
buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', () => {
        closeModal();
        launchGame(button);
    })
})


const closeModal = () => {
    console.log(modal == null);
    if (modal) {
        console.log(modal.classList)
        modal.classList.remove('enable')
        shadow.classList.remove('enable-shadow');
        console.log(modal.classList);
    }

}



let wordSelection = words[Math.floor(Math.random() * words.length)];
let correctL = [];
let wrongL = [];

//set the word
const setWord = () => {
    console.log(wordSelection);
    wordGuessed.innerHTML = `
     ${wordSelection.split('').map(l => `<p class ="letter">
            ${correctL.includes(l) ? l : ''}
            </p>`
            ).join('')}`;

    const getWord = wordGuessed.innerText.replace(/\n/g, '');
    if (getWord === wordSelection) {
        message.innerText = 'You made it, the spaceman was not able to leave the planet!';
        footerContainer.style.display = 'flex';
    }

    // }
}

//set the wrong letters

const wrongLetter = () => {
    letterUsed.innerHTML = `${wrongL.map(l => `<span>${l + ', '}</span`)}`;


    // //display shipParts
    shipParts.forEach((part, index) => {
        const errors = wrongL.length;
        if (index < errors) {
            part.style.display = 'block'
        } else {
            part.style.display = 'none';
        }

    }
    )
    if (wrongL.length === shipParts.length) {
        message.innerText = 'Oh no, You did not made it on time, the spaceman has left!';
        footerContainer.style.display = 'flex';
    }
}

//letter already pressed
const alreadyPressed = () => {
    alertC.classList.add('popup');
    setTimeout(() => {
        alertC.classList.remove('popup');
    }, 1500)
}

//letter pressed
window.addEventListener('keydown', event => {
    //https://keycode.info/
    if (event.keyCode > 64 && event.keyCode < 91) {
        const l = event.key;
        console.log(wordSelection.includes(l))
        if (wordSelection.includes(l)) {
            if (!correctL.includes(l)) {
                correctL.push(l);
                setWord();
            } else {
                alreadyPressed();
            }
        } else {
            if (!wrongL.includes(l)) {
                wrongL.push(l);
                wrongLetter();
            } else {
                alreadyPressed();
            }
        }
    }
})


const launchGame = (button) => {
    if (button.currntTarget.value === 'Space') {
        wordSelection = words[Math.floor(Math.random() * words.length)]
        console.log(wordSelection);
        correctL = [];
        wrongL = [];
        setWord();
        wrongLetter();
        footerContainer.style.display = 'none';
    }
}

playAgain.addEventListener('click', () => {

});

setWord();

