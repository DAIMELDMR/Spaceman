const shipParts = document.querySelectorAll('ship');
const wordGuessed = document.getElementById('word');
const plaAgainButton = document.getElementById('play-again');
const letterUsed = document.getElementById('letter-container');
const message = document.getElementById('result-message');
const alert = document.getElementById('alert')
const footerContainer = document.getElementById('footer-container');


const words = ['progressive', 'smart', 'breathe', 'explosion', 'propulsion'];

let wordSelection = words[Math.floor(Math.random() * words.length)];
const correctL = [];
const wrongL = [];

//set the word
const setWord = () => {
    let letters = wordSelection.split('');
    for (let i = 0; i < letters.length; i++) {
        if (correctL.includes(letters[i])) {
            wordGuessed.innerHTML = `<span class = "letter">${correctL[i]}</span>`;
        } else {
            wordGuessed.innerHTML = `<span class = "letter">${''}</span>`;
        }

    }
    correctL.join('');
    const getWord = wordGuessed.innerText.replace(/\n/g, '');
    if (getWord === correctL) {
        message.innerText = 'You won!';
        footerContainer.style.display = 'flex';
    }

}

//set the wrong letters

const wrongLetter = () => {
    letterUsed.innerHTML = `
    ${wrongL.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongL.map(l => `<span>${l}</span`)}`;

    //display shipParts
    for (let i = 0; i, shipParts.length; i++) {
        const errors = wronl.length;
        if (i < errors) {
            shipParts[i].style.display = 'block';
        } else {
            shipParts[i].style.display = 'none';
        }
    }
    //lost condition
    if (wrongL.length === shipParts.length) {
        message.innerText = 'You lost.'
        footerContainer.style.display = 'flex';
    }
}

setWord();