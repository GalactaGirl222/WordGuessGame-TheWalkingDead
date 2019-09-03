let WordArray = ["Dead", "zombies", "Walking", "evolution", "Omega"]
let htmlGuesses = document.getElementById("Letters")
let guesses = 13;

document.onkeyup = function (event) {
    
var guess = event.key;

guesses = guesses - 1;

htmlGuesses.textContent = guesses;

document.getElementById("guesses").innerHTML = guesses;

 }





 

