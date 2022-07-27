"use strict";
let side1 = prompt("Enter the length of the First side");
let side2 = prompt("Enter the length of the Second side");
let side3 = prompt("Enter the length of the Third side");

let semiperimeter = (side1+side2+side3)/2;
let result = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));

document.body.innerHTML = `Area of the triangle having the length of the sides ${side1}, ${side2}, ${side3} is ${result}`;