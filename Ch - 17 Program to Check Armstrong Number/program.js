"use strict";

let inputNumber = prompt("Enter the number");
let digitLength = parseInt(inputNumber.length);
let total = 0;
let temp = inputNumber;

while(temp > 0) {
    let reminder = temp % 10;
    total += reminder ** digitLength;
    temp = parseInt(temp / 10);
}

document.body.innerHTML += `${total}`;