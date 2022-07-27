// Objects are Reference Type
// Objects are used for Real World Data
// Objects store Key Value Pairs
// Objects don't have index

"use strict";

// Declaring an Object
let tempPerson = {};

// Initializing an Object
tempPerson = {
    tempFirstName : "Baisampayan",
    tempLastName : "Das",
    tempAge : 33
}

// Printing the Objects in Console
console.log (tempPerson);

// Declaring and Initializing an Object
const person = {
    firstName : "Baisampayan",
    lastName : "Das",
    age : 33,
    // Giving an Key Name that have space between two words
    "Technical Specialties" : "Full Stack Developer",
    Hobbies : ["Cricket", " Football", " Table Tennis", " Music", " Technology"]
}

// Printing the Objects in Console
console.log (person);
console.log (person.firstName);
console.log (person["age"]);
console.log (person["Technical Specialties"]);

// Adding Key Value Pair to the Object
person.address = "Kolkata, West Bengal";
person["Gender"] = "Male";

// Printing the Objects in Console
console.log (person.address);
console.log (person.Gender);

// Assigning a Variable that would replace with the Key Value Name
const keyName = "email";
person[keyName] = "baisampayandas@gmail.com";

// Printing the Objects in Console
console.log (person[keyName]);
console.log (person);


// How to Iterate Objects
//     Method 1: For in Loop
//     Method 2: Objects.keys 

// Method 1: For in Loop
document.body.innerHTML += "Printing Object with For in Loop<br><br>";
for (let keys in person) {
    document.body.innerHTML += `${keys.toUpperCase()}: ${person[keys]}<br>`;
}
// Method 2: Objects.keys
document.body.innerHTML += "<br><br>Printing Object with Object.keys<br><br>";
console.log(Object.keys(person));
for(let key of Object.keys(person)) {
    document.body.innerHTML += `${key.toUpperCase()}: ${person[key]}<br>`;
}
