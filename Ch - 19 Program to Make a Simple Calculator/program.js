"use strict";

let firstNumber = parseInt(prompt("Provide your First Number"));
let secondNumber = parseInt(prompt("Enter Second Number"));
const operator = prompt(`Enter operator ( either +, -, * or / ): `);

switch(operator) {
    case "+": {
        document.body.innerHTML = `${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`;
        break;
    }
    case "-": {
        document.body.innerHTML = `${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`;
        break;
    }
    case "*": {
        document.body.innerHTML = `${firstNumber} x ${secondNumber} = ${firstNumber*secondNumber}`;
        break;
    }
    case "/": {
        document.body.innerHTML = `${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`;
        break;
    }
    default: {
        document.body.innerHTML = `Provided Invalid Input`;
        break;
    }
}