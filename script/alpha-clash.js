// function Start(){
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection)
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }
function handleKeyboardKeyUpEvent(){
    const playerPressed = event.key;
   console.log('player pressed', playerPressed);

   const currenAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currenAlphabetElement.innerText;
   const expectedAlphabet = currentAlphabet.toLowerCase();
   console.log(playerPressed, expectedAlphabet);

//    check matching or not
if(playerPressed === expectedAlphabet){
    console.log('you get a point');
    console.log('you have pressed correctly',  expectedAlphabet);
    removeBgColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('opps! lost a life');
}

}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardKeyUpEvent);








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