const shipParts = document.querySelectorAll('.ship');
const wordGuessed = document.getElementById('word');
const playAgain = document.getElementById('play-again');
const letterUsed = document.getElementById('wrong-letters');
const message = document.getElementById('result-message');
const alertC = document.getElementById('alert')
const footerContainer = document.getElementById('footer-container');


const words = ['progressive', 'smart', 'breathe', 'explosion', 'propulsion','verging', 'encourage', 'immanence', 'nonvitiation', 'eradication', 'vertebration', 'tunnage', 'untranscendental', 'blastoderm', 'sunshiny', 'clownishly', 'ureteric', 'multilaminate',  'imploded', 'absorber', 'semiemotional', 'housewrecker', 'tribade', 'nonvolubleness','desterilize', 'colorfastness', 'crusoe', 'dyscrasia', 'atreus', 'pewage', 'featherstitch', 'nephrogenic', 'plenteously', 'courteney', 'uncastigated', 'reshew', 'kali', 'unarrestable', 'underlip', 'conrad', 'rajas', 'blazer', 'minhagic', 'shiksa', 'stoppability', 'employer', 'brest', 'beniamino', 'orotundity', 'dekko', 'caudated', 'fulgent', 'unapostrophized'];

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


playAgain.addEventListener('click', () => {
    wordSelection = words[Math.floor(Math.random() * words.length)]
    console.log(wordSelection);
    correctL = [];
    wrongL = [];
    setWord();
    wrongLetter();
    footerContainer.style.display = 'none';
});

setWord();

