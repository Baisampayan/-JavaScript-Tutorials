"use strict";

// Creating a  Variable
const varNor = "NormalVariable";

// Creating a Variable that calls a function
const varFunction = function() {
    return null;
}

// Checking if the variable us a function type or not

// Method 1: "Function call()"
document.body.innerHTML = `Method: 1<br>Checking if the variable us a function type or not with "Function call()"<br>`
function varTest1 (variable) {
    if (variable instanceof Function) {
        document.body.innerHTML += `The Variable: ${variable} is Function Type<br>`;
    } else {
        document.body.innerHTML += `The Variable: ${variable} is not Function Type<br>`;
    }
}
varTest1(varNor);
varTest1(varFunction);

// Method 2: "typeof Operator"
document.body.innerHTML += `<br>Method: 2<br>Checking if the variable us a function type or not with "typeof Operator"<br>`
function varTest2 (variable) {
    if (typeof(variable) === 'function') {
        document.body.innerHTML += `The Variable: ${variable} is Function Type<br>`;
    } else {
        document.body.innerHTML += `The Variable: ${variable} is not Function Type<br>`;
    }
}
varTest2(varNor);
varTest2(varFunction);

// Method 3: "Object.prototype.toString.call() Method"
document.body.innerHTML += `<br>Method: 3<br>Checking if the variable us a function type or not with "Object.prototype.toString.call() Method"<br>`
function varTest3 (variable) {
    if (Object.prototype.toString.call(variable) === '[object Function]') {
        document.body.innerHTML += `The Variable: ${variable} is Function Type<br>`;
    } else {
        document.body.innerHTML += `The Variable: ${variable} is not Function Type<br>`;
    }
}
varTest3(varNor);
varTest3(varFunction);