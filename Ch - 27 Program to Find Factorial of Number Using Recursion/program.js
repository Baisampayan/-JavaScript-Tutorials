"use strict";

function factorial(num) {
    if (num == 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

const inputNum = parseInt(prompt("Enter the number for Factorial"));
if (inputNum < 0) {
    document.body.innerHTML = "Enter a Positive Number";
} else {
    document.body.innerHTML = `The Factorial of ${inputNum} is ${factorial(inputNum)}`;
}