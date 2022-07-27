"use strict";

const inputKey = prompt("Enter a Character");
document.body.innerHTML = `The ASCII value of ${inputKey} is ${inputKey.charCodeAt()}<br>Alternate Method: ${inputKey.codePointAt()}`;