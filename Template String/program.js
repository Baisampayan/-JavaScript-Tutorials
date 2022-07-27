//Template String

"use strict";

let fullName = prompt("Enter your Name:");
let age = prompt("Enter your Age:");

document.body.innerHTML = `<h3>Hi ${fullName}, your age is ${age} now and after 10 years your age will be ${10 + +age}</h3>`;