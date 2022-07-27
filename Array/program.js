"use strict";

//Declaring Array
let fruits = ["Apple", "Banana"];
let fruits2 = fruits;

//Printing Arrays 1
document.body.innerHTML = `Displaying First Array items: <br>`;
for(let i=0; i< fruits.length; i++) {
    document.body.innerHTML += fruits[i] + "<br>";
}

//Printing Arrays 2
document.body.innerHTML += `<br>Displaying Second Array items: <br>`;
for(let i=0; i< fruits2.length; i++) {
    document.body.innerHTML += fruits2[i] + "<br>";
}

//Adding Items to Array 1 at the end
fruits.push("Mango", "Grapes");

//Printing Arrays 1
document.body.innerHTML += `<br>Displaying First Array items after adding more items: <br>`;
for(let i=0; i< fruits.length; i++) {
    document.body.innerHTML += fruits[i] + "<br>";
}

//Printing Arrays 2
document.body.innerHTML += `<br>Displaying Second Array items: <br>`;
for(let i=0; i< fruits2.length; i++) {
    document.body.innerHTML += fruits2[i] + "<br>";
}

//Printing Type
document.body.innerHTML += "<br>Type of datatype: " + typeof(fruits);
document.body.innerHTML += "<br>Is this an array: " + Array.isArray(fruits);
document.body.innerHTML += "<br>Checking if both the Arrays are same: ";
document.body.innerHTML += (fruits === fruits2);

//Deleting an item from last
document.body.innerHTML += `<br><br>Displaying First Array items: ${fruits.pop()} after deleting items: <br>`;

//Printing Array 1
for(let i=0; i < fruits.length; i++) {
    document.body.innerHTML += fruits[i] + "<br>";
}

//Deleting an item from last
document.body.innerHTML += `<br>Displaying Second Array after deleting items from First Array: <br>`;

//Printing Array 1
for(let i=0; i < fruits2.length; i++) {
    document.body.innerHTML += fruits2[i] + "<br>";
}