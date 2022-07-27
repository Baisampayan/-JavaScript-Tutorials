"use strict";

let minNumber = parseInt(prompt("Enter the starting Number"));
let maxNumber = parseInt(prompt("Enter the ending Number"));
document.body.innerHTML = `All the Prime Number Present between ${minNumber} to ${maxNumber} are:<br>`

for(let i = minNumber; i<=maxNumber; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        document.body.innerHTML += `${i} <br>`;
    }
}