"use strict";

let inputName = prompt('Enter your name');

function greet() {
    return 'Hello';
}

function greetings (fullName, funct) {
    const greetStart = greet();
    document.body.innerHTML = `${greetStart} ${fullName}!`;
}

greetings(inputName, greet);