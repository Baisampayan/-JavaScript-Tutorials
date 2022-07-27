"use strict";

let inputNum = parseInt(prompt("Enter a positive Decimal number"));
let rem = 0, temp=0, qnt, step = 1, i = 1;

document.body.innerHTML = `The Binary Number of ${inputNum} is: `;
while(inputNum!=0) {
    rem = inputNum % 2;
    inputNum = parseInt(inputNum / 2);
    temp += rem * i; 
    i *= 10;
}
document.body.innerHTML += `${temp}`;