"use strict";

function add(numOne = 1, numTwo = 1) {
    return numOne+numTwo;
}

document.body.innerHTML += `The Addition of 5 and 10 is ${add(5, 10)}<br>`;
document.body.innerHTML += `The Addition of 7 and Nothing is ${add(7)}<br>`;
document.body.innerHTML += `The Addition of Nothing is ${add()}<br>`;
