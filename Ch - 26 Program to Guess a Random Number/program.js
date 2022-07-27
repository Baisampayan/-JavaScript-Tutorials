"use strict";

function guessNumber() {
    
    let startRange = parseInt(prompt("Enter the Starting Range"));
    let endingRange = parseInt(prompt("Enter the Ending Range"));

    let guessNumber = parseInt(prompt("Enter your Guessing Number"));
    let ranNumber = Math.floor(Math.random() * (endingRange - startRange + 1)) + startRange;

    if (guessNumber === ranNumber) {
        document.body.innerHTML = `Your guess is correct, the number is ${ranNumber}`;
    } else {
        document.body.innerHTML = `You guess is not correct, the correct number is ${ranNumber}`;
    }
}

guessNumber();