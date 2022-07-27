"use strict";

let num1 = prompt("Enter First Positive Number:");
let num2 = prompt("Enter Second Positive Number");

// First Method
let flag = 0;
let maxNum = num1>num2?num1:num2;
while(flag<1) {
    if (maxNum % num1 == 0 && maxNum % num2 == 0) {
        document.body.innerHTML += `The LCM of ${num1} and ${num2} is ${maxNum}`;
        flag = 1;
        break;
    }
    maxNum++;
}

// Alternate Method using the For Loop
document.body.innerHTML += "<br><br>Using Alternate Method:<br>";
let hcf;
for(let i=1; i<=num1 && i<=num2; i++) {
    if(num1%i==0 && num2%i==0) {
        hcf = i;
    }
}

const lcm = (num1 * num2) / hcf;
document.body.innerHTML += `The L.C.M of ${num1} and ${num2} is ${lcm}`;