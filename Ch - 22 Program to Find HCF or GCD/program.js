"use strict";

let hcf;
const num1 = prompt("Enter the First Positive Number:");
const num2 = prompt("Enter the Second Positive Number");

for(let i=1; i<=num1 && i<=num2; i++) {
    if(num1%i==0 && num2%i==0) {
        hcf = i;
    }
}

document.body.innerHTML = `The HCF of ${num1} and ${num2} is ${hcf}`;