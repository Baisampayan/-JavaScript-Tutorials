"use strict";

let factNumber = parseInt(prompt("Enter the Number for Factorial"));

if(factNumber < 1) {
    document.body.innerHTML = `Please enter a number that is greater than 0`
} else {
    let factorial = 1;
    for(let i = 1; i <= factNumber; i++) {
        factorial *= i;
    }
    document.body.innerHTML = `The factorial for ${factNumber} is ${BigInt(factorial)}`;
}