"use strict";
let number = prompt("Enter a number");

/* if(number > 0) {
    document.body.innerHTML = `It's a positive number and greater than Zero`;
} else if(number == 0) {
    document.body.innerHTML = `The number is Zero`;
} else {
    document.body.innerHTML = `It's a negative number`;
} */

// Ternary Operator 
(number > 0) ? document.body.innerHTML = `It's a positive number and greater than Zero` : (number == 0) ? document.body.innerHTML = `The number is Zero` : document.body.innerHTML = `It's a negative number`;