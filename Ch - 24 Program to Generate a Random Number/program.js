"use strict";

let minNum = parseInt(prompt("Enter the starting range:"));
let maxNum = parseInt(prompt("Enter the ending range:"));

let ranNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
document.body.innerHTML = `The Random Number Between ${minNum} to ${maxNum} is ${ranNum}`;