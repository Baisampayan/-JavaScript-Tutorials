"use strict";

// Method 1: Using "else-if"
function add() {
    if(arguments.length == 0) {
        document.body.innerHTML += `No numbers given to add<br>`;
    } else if (arguments.length == 1) {
        document.body.innerHTML += `Please provide more than one number<br>`;
    } else {
        let result = 0;
        //let length = arguments.length;
        for (let i=0; i<arguments.length; i++) {
            result += arguments[i];
        }
        document.body.innerHTML += `Result of the addition is ${result}<br>`;
    }
}

// Method 1: Using "else-if"
function sum() {
    switch(arguments.length) {
        case 0: {
            document.body.innerHTML += `No numbers given to add<br>`;
            break;
        }
        case 1: {
            document.body.innerHTML += `Please provide more than one number<br>`;
            break;
        }
        default: {
            let result = 0;
            for (let i=0; i<arguments.length; i++) {
                result += arguments[i];
            }
            document.body.innerHTML += `Result of the addition is ${result}<br>`;
        }
    }
}

// Method 1: Using "else-if"
document.body.innerHTML += `Method 1: Using "else-if"`;

document.body.innerHTML += `Providing no numbers<br>`;
add();
document.body.innerHTML += `<br>Providing one numbers<br>`;
add(15);
document.body.innerHTML += `<br>Providing numbers 25 and 14<br>`;
add(25, 14);
document.body.innerHTML += `<br>Providing numbers 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10<br>`;
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Method 1: Using "else-if"
document.body.innerHTML += `<br><br>Method 1: Using "else-if"`;

document.body.innerHTML += `Providing no numbers<br>`;
sum();
document.body.innerHTML += `<br>Providing one numbers<br>`;
sum(15);
document.body.innerHTML += `<br>Providing numbers 25 and 14<br>`;
sum(25, 14);
document.body.innerHTML += `<br>Providing numbers 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10<br>`;
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 