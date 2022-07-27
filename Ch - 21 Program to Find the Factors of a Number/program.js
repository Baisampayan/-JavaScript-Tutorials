"use strict";

let fact = parseInt(prompt("Enter the number to find the Factorial for"));
let i = 1;
document.body.innerHTML = `The Factorial of ${fact} are:<br>`;

while (i <= fact) {
    if(fact%i == 0) {
        document.body.innerHTML += `${i}<br>`;
    }
    i++;
}