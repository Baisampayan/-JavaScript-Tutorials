// computed Properties
// Computed properties allow you to dynamically choose what property in your object gets updated. */

let nameOne = "Rohit";
let ageOne = 16;

let nameTwo = "Raj";
let ageTwo = 18;

let obj = {
    [nameOne] : ageOne,
    [nameTwo] : ageTwo
};

console.log(obj);
for (let keys in obj) {
    document.body.innerHTML += `${keys}: ${obj[keys]}<br>`;
}

obj.nameOne = "Rakesh";
console.log(obj);
for (let keys in obj) {
    document.body.innerHTML += `${keys}: ${obj[keys]}<br>`;
}

// Spread Operator in Objects
/* Spread Operator allows us to quickly copy all or part of an existing array or object into another array or object. */

document.body.innerHTML += `<br><br>Spread Operator in Objects<br>`
const obj1 = {
    nameOne : "Rohit",
    ageOne : 18
}

const obj2 = {
    nameTwo : "Rakesh",
    ageTwo : 19
}

const newObj = {...obj1, ...obj2};
for (let keys in newObj) {
    document.body.innerHTML += `${keys}: ${newObj[keys]}<br>`;
}

document.body.innerHTML += `<br><br>No Objects can have same key name, it will override it with the last one<br>`;

const obj3 = {
    nameOne : "Rony",
    ageOne : 18
}

// Using same key name as nameOne
const obj4 = {
    nameOne : "Risikesh",
    nameTwo : "Ronit",
    ageTwo : 19
}

// Adding new key and value while using spread operator
const newObj1 = {...obj3, ...obj4, newName: "Mukesh"};
for (let keys in newObj1) {
    document.body.innerHTML += `${keys}: ${newObj1[keys]}<br>`;
}

// Object Destructuring
/* It is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. */

const person = {
    firstName : "Rohit",
    lastName : "Sharma",
    age : 34,
    profession : "Cricket",
    height: '5.8"',
    Country: "India"
}

// Taking alias name for fName as variable for firstName or we need the put the same key of the object
let {firstName: fName, lastName, age, ...restInfo} = person;
console.log(person);
document.body.innerHTML += `<br><br>Printing the value of the variable after Object Destructuring<br>`;
document.body.innerHTML += `Name: ${fName} ${lastName} and his age is ${age}`;

// Taking only the profession into one variable
let {profession: prof} = person;
document.body.innerHTML += `<br>Profession: ${prof}<br><br>`;

// Printing the other output as stored in Object
for (let keys in restInfo) {
    document.body.innerHTML += `${keys}: ${restInfo[keys]}<br>`;
}