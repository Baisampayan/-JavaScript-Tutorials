"use strict";

let fullName = prompt("Enter your name");
let age = prompt("Enter your age");

if(age<18) {
    document.body.innerHTML = `Hi ${fullName}! you are not permitted to enter.`;
}else {
    document.body.innerHTML = `Hi ${fullName}! you can enter`;
}