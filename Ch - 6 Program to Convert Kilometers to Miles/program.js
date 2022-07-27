"use strict";

let kilometer = prompt("Enter the value in Kilometer");
const converter = 0.621371;
let miles = +kilometer * +converter;

document.body.innerHTML = `<h4>${kilometer} Kilometer is equal to ${miles} Miles</h4>`;