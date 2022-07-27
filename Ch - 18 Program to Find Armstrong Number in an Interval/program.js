"use strict";

let startingNumber = parseInt(prompt("Enter the starting range"));
let endingNumber = parseInt(prompt("Enter the ending range"));

document.body.innerHTML += `Armstrong Number from ${startingNumber} to ${endingNumber} are:<br>`; 

for(let i=startingNumber; i<= endingNumber; i++) {
    let numberLength = i.toString().length;
    let temp = i;    
    let result = 0;

    while(temp > 0) {
        let tempReminder = temp % 10;
        result += tempReminder ** numberLength;
        temp = parseInt(temp / 10);
    }

    if(i == result) {
        document.body.innerHTML += `${i}<br>`; 
    }
}