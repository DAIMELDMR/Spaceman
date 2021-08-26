const shipParts = document.querySelectorAll('.ship');
const wordGuessed = document.getElementById('word');
const playAgain = document.getElementById('play-again');
const letterUsed = document.getElementById('wrong-letters');
const message = document.getElementById('result-message');
const alertC = document.getElementById('alert')
const footerContainer = document.getElementById('footer-container');


const words = ['progressive', 'smart', 'breathe', 'explosion', 'propulsion'];

let wordSelection = words[Math.floor(Math.random() * words.length)];
let correctL = [];
let wrongL = [];

//set the word
console.log(wordSelection)
const setWord = () => {
    wordGuessed.innerHTML = `
     ${wordSelection.split(' ').map(l => `<span class ="letter">
            ${correctL.includes(l) ? l : ''}
            </span>`
            ).join('')}`;
    // const setWord = () => {
    // console.log(wordSelection);
    // let letters = wordSelection.split('');
    // console.log(letters);
    // for (let i = 0; i < letters.length; i++) {
    //     if (correctL.includes(letters[i])) {
    //         let span = document.createElement('span');
    //         span.innerText = correctL[i];
    //         console.log(span);
    //         wordGuessed.appendChild(span);
    //         // wordGuessed.innerHTML = `<span class = "letter">${correctL[i]}</span>`;
    //     } else {
    //         // wordGuessed.innerHTML = `<span class = "letter">${''}</span>`;
    //         console.log('wrong letter');
    //     }

    // }
    // console.log(correctL);
    // correctL.join('');

    console.log(correctL);
    const getWord = wordGuessed.innerText.replace(/\n/g, '');
    if (getWord === wordSelection) {
        message.innerText = 'You won!';
        footerContainer.style.display = 'flex';
    }

    // }
}

//set the wrong letters

const wrongLetter = () => {
    letterUsed.innerHTML = `${wrongL.map(l => `<span>${l + ', '}</span`)}`;

    // letterUsed.innerHTML = `
    // ${wrongL.map(l => `<span>${l + ','}</span`)}`;

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
    // for (let i = 0; i < shipParts.length; i++) {
    //     const errors = wrongL.length;
    //     if (i < errors) {
    //         shipParts[i].style.display = 'block';
    //     } else {
    //         shipParts[i].style.display = 'none';
    //     }
    // }
    // //lost condition
    if (wrongL.length === shipParts.length) {
        message.innerText = 'You lost.'
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


playAgain.addEventListener('click', () => {
    wordSelection = words[Math.floor(Math.random() * wordSelection.length)]
    correctL = [];
    wrongL = [];
    setWord();
    wrongLetter();
    footerContainer.style.display = 'none';
});

setWord();

