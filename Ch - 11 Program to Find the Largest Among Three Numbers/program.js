"use strict";

let numberOne = prompt("Enter the First Number");
let numberTwo = prompt("Enter the Second Number");
let numberThree = prompt("Enter the Third Number");

((numberOne > numberTwo) && (numberOne > numberThree)) ? document.body.innerHTML = `The First Number: ${numberOne} is the largest` : ((numberTwo > numberOne) && (numberTwo > numberThree)) ? document.body.innerHTML = `The Second Number: ${numberTwo} is the largest` : document.body.innerHTML = `The Third Number: ${numberThree} is the largest`;