"use strict";

let table = parseInt(prompt("Enter the Multiple Table:"));
let range = parseInt(prompt("Enter a range"));
let result;
for(let i=1; i<=range; i++) {
    document.body.innerHTML += `${table} x ${i} = ${table*i}<br>`;
}