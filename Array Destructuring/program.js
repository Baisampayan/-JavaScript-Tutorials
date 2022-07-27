"use strict";

// Array Destructuring
const fruitsArray = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];

// Destructuring
let [fruit1, fruit2] = fruitsArray;

// Printing the Arrays
document.body.innerHTML += `Fruit1: ${fruit1}<br>Fruit2: ${fruit2}<br>`;

// Changing the value and printing
fruit1 = "Change Value";
document.body.innerHTML += `<br>Fruit1: ${fruit1}<br>Fruit2: ${fruit2}`;

// Assigning the previous value to variable1
[fruit1] = fruitsArray;
document.body.innerHTML += `<br>Fruit1: ${fruit1}<br>Fruit2: ${fruit2}<br>`;

// Assigning the Array[3] value to variable2 (Skipping Array index)
[fruit1, , fruit2] = fruitsArray;
document.body.innerHTML +=`<br>Fruit1: ${fruit1}<br>Fruit2: ${fruit2}`;

// Assigning two Array value to variable and remain one into a new array
let newFruitsArray=[];
[fruit1, fruit2, ...newFruitsArray] = fruitsArray;
document.body.innerHTML +=`<br>Fruit1: ${fruit1}<br>Fruit2: ${fruit2}<br><br>Printing the rest of the Array:<br>`;
for (let fruit of newFruitsArray) {
    document.body.innerHTML += `${fruit}<br>`;
}