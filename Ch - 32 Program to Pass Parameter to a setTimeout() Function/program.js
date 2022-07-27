"use strict";

// Method 1:
setTimeout (function greetings(){
    document.body.innerHTML += `<br><br>Hi, this is greetings from setTimeout 1`;
}, 3000);


// Method 2
function greetings2 (var1, var2) {
    document.body.innerHTML += `${var1} ${var2}`;
}
setTimeout (greetings2, 8000, '<br><br>Hi, this is greetings from ', 'setTimeout 2');
document.body.innerHTML += "<h2>Welcome to setTimeout<h2>";