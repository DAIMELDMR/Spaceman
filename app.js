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

const setWord = () => {
    let letters = wordSelection.split('');
    for (let i = 0; i < letters.length; i++) {
        if (correctL.includes(letters[i])) {
            wordGuessed.innerHTML = `<span class = "letter">${correctL[i]}</span>`
        } else {
            wordGuessed.innerHTML = `<span class = "letter">${''}</span>`;
        }

    }
    const getWord = wordGuessed.innerText.replace(/\n/g, '');
    if (getWord === letters) {
        message.innerText = 'You won!';
        footerContainer.style.display = 'flex';
    }


}

setWord();