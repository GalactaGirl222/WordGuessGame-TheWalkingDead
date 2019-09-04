// array of words
const word = ["Dead", "zombies", "Walking", "evolution", "Omega"]

// how do you make underscores appear under words based on length 

//random word generator\
let randNum = Math.floor( Math.random() * word.length);
let selectedWord = word[randNum];
let underscore = [];

let generateUnderscore = () => {
    for(let i = 0; i < selectedWord.length; i++);{
        underscore.push('_');

    }
    return underscore;
}

console.log(generateUnderscore());
console.log(selectedWord);
//retrieve users guess and check to see if the guess is correct 
// if correct push to right array.
// if wrong push to wrong array. 



 

