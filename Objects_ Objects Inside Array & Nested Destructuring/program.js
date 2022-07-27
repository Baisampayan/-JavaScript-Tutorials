// Creating Objects inside Array
const users = [
    {userId: 1, fName: "Raj", gender: "Male"},
    {userId: 2, fName: "Mohit", gender: "Male"},
    {userId: 3, fName: "Sonia", gender: "Female"}
];

for (let user of users) {
    console.log(user);
    document.body.innerHTML += `${user.userId}: ${user.fName} - ${user.gender}<br>`;
}

// Nested Destructuring
// Creating variables as Objects to store object
document.body.innerHTML += `<br><br>Creating variables to store objects<br>`
const [user1, user2, user3] = users;

// Iterating the Objects
document.body.innerHTML += `Type of User1: ${typeof(user1)}<br>Printing values of User1<br>`;
for(let key of Object.keys(user1)) {
    document.body.innerHTML += `${user1[key]}<br>`;
}

document.body.innerHTML += `<br><br>Type of User2: ${typeof(user2)}<br>Printing values of User2<br>`;
for(let key of Object.keys(user2)) {
    document.body.innerHTML += `${user2[key]}<br>`;
}

document.body.innerHTML += `<br><br>Type of User3: ${typeof(user3)}<br>Printing values of User3<br>`;
for(let key of Object.keys(user3)) {
    document.body.innerHTML += `${user3[key]}<br>`;
}

// Fetching different values from different objects and storing them in variables
const [{fName}, {fName: object2FName},{gender}] = users;

document.body.innerHTML += `<br><br>Type of fName from Object 1: ${typeof(fName)}<br>Printing the value of fName from Object 1<br>`;
document.body.innerHTML += `${fName}<br>`;

document.body.innerHTML += `<br><br>Type of gender from Object 3: ${typeof(gender)}<br>Printing the value of gender from Object 3<br>`;
document.body.innerHTML += `${gender}<br>`;

document.body.innerHTML += `<br><br>Changing the variable name of fName from Object 2 as object2FName and printing the value of fName from Object 2<br>`;
document.body.innerHTML += `${object2FName}<br>`;