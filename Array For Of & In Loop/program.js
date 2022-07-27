"use strict";

const fruits = ["Apple","Banana", "Mango"];

// Displaying the Array using the For Of Loop

document.body.innerHTML = "Displaying the Array using the For Of Loop<br>"
for(let fruit of fruits) {
    document.body.innerHTML += `${fruit}<br>`
}

// Displaying the Array using the For In Loop
document.body.innerHTML += "<br>Displaying the Array Index using the For In Loop<br>"
for(let index in fruits) {
    document.body.innerHTML += `${index}<br>`
}

document.body.innerHTML += "<br>Displaying the Array Index with Value<br>"
for(let index in fruits) {
    document.body.innerHTML += `${parseInt(index)+1}. ${fruits[index]} -> is in the index ${index}<br>`;
}