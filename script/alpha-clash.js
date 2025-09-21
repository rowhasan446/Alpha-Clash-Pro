// function Start(){
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection)
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }
function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your alphabet is', alphabet)

    // show alphabet on screen
    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;

    // set bg color
    setBgColorById(alphabet);
}

function Start(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}