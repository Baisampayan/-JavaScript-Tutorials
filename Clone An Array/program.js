"use strict";

// How to clone an array (Slice)
let fruits1 = ["Apple", "Banana", "Orange"];
let fruits2 = fruits1.slice(0);

// Display Array 1
document.body.innerHTML = "Display Array 1:<br>";
for(let i=0; i<fruits1.length; i++) {
    document.body.innerHTML += `${fruits1[i]} <br>`;
}

// Display Array 2
document.body.innerHTML += "<br>Display Array 2<br>";
for(let i=0; i<fruits2.length; i++){
    document.body.innerHTML += `${fruits2[i]}<br>`;
}

// Comparing both the Array
document.body.innerHTML += "<br>Is both the Array same: " + (fruits1===fruits2) + "<br>";

//Second method of cloning the Array (ConCat)
let fruits3 = [].concat(fruits1);

// Display Array 3 with forEach function
document.body.innerHTML += "<br>Display Array 3 with forEach function:<br>"
fruits3.forEach(function(fruit){
    document.body.innerHTML += `${fruit}<br>`;
})

// Third method of cloning the Array (Spread Operator)
let fruits4 = [...fruits1];

// Display Array 4
document.body.innerHTML += "<br>Display Array 4 (Spread Operator):<br>"
fruits4.forEach(function(fruit){
    document.body.innerHTML += `${fruit}<br>`
})

// Cloning and Adding two Arrays into one
let fruits6 = ["Mango", "Pineapple"];
let fruits7 = [...fruits1].concat([...fruits6]).concat(["Kiwi","Pear"]); 

// Display Array 7
document.body.innerHTML += "<br>Cloning and Adding two Arrays into one:<br>";
fruits7.forEach(function(fruit){
    document.body.innerHTML += `${fruit}<br>`;
})

// Cloning and Adding two Arrays into one (Second Method)
let fruits8 = [...fruits1, ...fruits6, "Kiwi","Pear"];
document.body.innerHTML += "<br>Cloning and Adding two Arrays into one (Second Method):<br>";
fruits8.forEach(function(fruit){
    document.body.innerHTML += `${fruit}<br>`;
})

// Creating a new Array and converting the elements into uppercase
let fruits9 = [];
fruits8.forEach(function(fruit){
    fruits9.push(fruit.toUpperCase());
})

document.body.innerHTML += "<br>Cloning and Creating a new Arrays with uppercase elements:<br>";
fruits9.forEach(function(fruit){
    document.body.innerHTML += `${fruit}<br>`;
})