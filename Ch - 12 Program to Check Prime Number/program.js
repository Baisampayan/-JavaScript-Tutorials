"use strict";

let inputNumber = parseInt(prompt("Enter a number"));

if (inputNumber == 1) {
    document.body.innerHTML = `The number ${inputNumber} is neither prime nor composite number`;
} else{
    let isPrime = true;
    if(inputNumber > 1) {
        for(let i = 2; i < inputNumber; i++) {
            if(inputNumber % i == 0){
                isPrime = false;
                break;
            }
        }
    }
    if(isPrime){
        document.body.innerHTML = `The given number: ${inputNumber} is prime`;
    } else {
        document.body.innerHTML = `The given number: ${inputNumber} is not prime`;
    }
}