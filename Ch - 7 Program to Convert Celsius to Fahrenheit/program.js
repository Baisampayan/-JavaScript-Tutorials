"use strict"

let celsius = prompt("Enter the temperature in Celsius");
const fahrenheit = (celsius * 1.8) + 32;

document.body.innerHTML = `${celsius} degree Celsius is equal to ${fahrenheit} degree Fahrenheit`;