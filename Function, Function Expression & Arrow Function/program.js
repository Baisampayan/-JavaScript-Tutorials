// Function
// A JavaScript function is a block of code designed to perform a particular task.
function sum(a, b) {
    return a + b;
}
document.body.innerHTML +=`Adding 5 and 6 using simple function<br>Result: ${sum(5, 6)}`;

// Function Expression
// A function expression is very similar to and has almost the same syntax as a function declaration (see function statement below for details).
// function sum1(a, b) {
//     return a + b;
// }

const sum1 = function(a, b) {
    return a + b;
}
document.body.innerHTML +=`<br><br>Adding 5 and 6 using Function Expression<br>Result: ${sum1(5, 6)}`;

// Arrow Function
// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
/* 
There are differences between arrow functions and traditional functions, as well as some limitations:

1.  Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
2.  Arrow functions don't have access to the new.target keyword.
3.  Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
4.  Arrow functions cannot be used as constructors.
5.  Arrow functions cannot use yield, within its body. 
*/
let sum2 = (a, b) => {
    return a + b;
}
document.body.innerHTML += `<br><br>Adding 5 and 6 using Arrow Function<br>Result: ${sum2(5, 6)}`;