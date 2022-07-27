"use strict";

let term = parseInt(prompt("Enter the number of terms"));
let firstNumber = 0;
let secondNumber = 1

document.body.innerHTML = `Fibonacci Series: `
if(term>1) {
    for(let i=1; i<=term; i++) {
        document.body.innerHTML += `${firstNumber}, ${secondNumber}`;
        if(i<term){
            document.body.innerHTML += `, `;
        }
        firstNumber += secondNumber
        secondNumber += firstNumber;
    }
}