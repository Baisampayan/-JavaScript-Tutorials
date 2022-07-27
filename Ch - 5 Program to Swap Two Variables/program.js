"use strict";

let number1 = prompt("Enter First Number");
let number2 = prompt("Enter Second Number");

number1 = +number1 + +number2;
number2 = +number1 - +number2;
number1 = +number1 - +number2;

document.body.innerHTML = `<h4>After the Swap the First Number is ${number1} and Second Number is ${number2}</h4>`;