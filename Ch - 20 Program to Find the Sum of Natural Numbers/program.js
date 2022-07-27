"use strict";

let range = parseInt(prompt("Enter the range to find the sum of Natural Numbers"));
let sum = 0;
let i = 1;

while(i <= range) {
    sum += i;
    i++;
}

document.body.innerHTML = `Sum of the Natural Number: ${sum}`;