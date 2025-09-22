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
    // console.log('you have pressed correctly',  expectedAlphabet);
    
    // update score
    // const currentScoreElement =  document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // console.log(currentScoreText);
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    const currentScore = getTextElementValueById('current-score');


    const updatedScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    setTextElementValueById('current-score', updatedScore);






    // start new round
    removeBgColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('opps! lost a life');

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);
    
    if(updatedLife === 0){
        gameOver();
    }



    // ---------------------------------------------------
    // life count decrease
    // const currentLifeElment = document.getElementById('current-life');
    // const currentLifeText = currentLifeElment.innerText;
    // const currentLife = parseInt(currentLifeText);

    // const newLife = currentLife - 1;
    // currentLifeElment.innerText = newLife;


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
    hideElementById('final-score');
    showElementById('playground');
    // reset score and life
    setTextElementValueById('current-life', 3);
    setTextElementValueById('current-score', 0);
    continueGame();
}
function gameOver(){
    hideElementById('playground');
    showElementById('final-score');
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

}