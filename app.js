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

//variable
let wordSelection = '';
let correctL = [];
let wrongL = [];


// const space = document.getElementById('space');
const space = ['saturn', 'pluto', 'astroid', 'stardust', 'jupiter', 'earth', 'solar', 'moon', 'mars', 'venus', 'neptune', 'uranus', 'mercury','eclipse','galaxy','comet', 'planet','constellation','nebula','supernova'];

const cities = ['paris', 'london', 'moscow', 'tokyo', 'beijing', 'chicago', 'atlanta',
    'santorini', 'amsterdam', 'seoul', 'dubai', 'melbourne', 'madrid', 'frankfurt', 'montreal', 'rome','istanbul', 'munich', 'dublin', 'seattle']

const countries = ['japan', 'australia', 'greece', 'england', 'brazil', 'columbia', 'switzerland', 'poland', 'germany', 'sweden', 'china', 'cuba', 'morocco', 'austria', 'italy', 'honduras', 'malta', 'ireland', 'scotland', 'belize']








//set the word
const setWord = () => {
    console.log(wordSelection);
    wordGuessed.innerHTML = `
     ${wordSelection.split('').map(l => `<p class ="letter">
            ${correctL.includes(l) ? l : ''}</p>`
            ).join('')}`;

    const getWord = wordGuessed.innerText.replace(/\n/g, '');
    if (getWord === wordSelection) {
        message.innerText = 'You completed the mission! You stopped the Spaceman!';
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
        message.innerText = 'Oh no! You did not complete the mission, the spaceman has left!';
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

//launch the game to pick from different word banks
const launchGame = (button) => {
    if (button.innerHTML === 'Space') {
        wordSelection = space[Math.floor(Math.random() * space.length)]
        wordSelection.toLowerCase();
        console.log(wordSelection);
        correctL = [];
        wrongL = [];
        setWord();
        wrongLetter();
        footerContainer.style.display = 'none';
    } else if ((button.innerHTML === 'Cities')) {
        wordSelection = cities[Math.floor(Math.random() * cities.length)]
        console.log(wordSelection);
        wordSelection.toLowerCase();
        correctL = [];
        wrongL = [];
        setWord();
        wrongLetter();
        footerContainer.style.display = 'none';
    } else if (button.innerText === 'Countries') {
        wordSelection = countries[Math.floor(Math.random() * countries.length)]
        wordSelection.toUpperCase();
        console.log(wordSelection);
        correctL = [];
        wrongL = [];
        setWord();
        wrongLetter();
        footerContainer.style.display = 'none';
    }
}

console.log(buttons);
//working with the modal
buttons.forEach(button => {
    console.log(button.innerText);
    button.addEventListener('click', () => {
        closeModal();
        launchGame(button);
    })
})


const closeModal = () => {
    console.log(modal == null);
    if (modal) {
        modal.classList.remove('enable')
        shadow.classList.remove('enable-shadow');
    }

}



playAgain.addEventListener('click', () => {
    console.log(modal == null);
    if (modal) {
        modal.classList.add('enable')
        shadow.classList.add('enable-shadow');
    }
});

// setWord();

