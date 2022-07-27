"use strict";

let inputNumber = parseInt(prompt("Enter a positive number:"));
document.body.innerHTML = `The sum of natural numbers is ${recNaturalNumber(inputNumber)}`;

function recNaturalNumber(num) {
    if (num > 0) {
        return num + recNaturalNumber(num -1);
    } else {
        return num;
    }
}