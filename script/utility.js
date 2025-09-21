function hideElementById(elemntId){
    const element = document.getElementById(elemntId);
    element.classList.add('hidden');
}

function showElementById(elemntId){
    const element = document.getElementById(elemntId);
    element.classList.remove('hidden');
}

function setBgColorById(elemntId){
    const element = document.getElementById(elemntId);
    element.classList.add('bg-yellow-400');
}

function removeBgColorById(elemntId){
    const element = document.getElementById(elemntId);
    element.classList.remove('bg-yellow-400');
}





function getARandomAlphabet(){
    //create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    console.log(index);

    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}