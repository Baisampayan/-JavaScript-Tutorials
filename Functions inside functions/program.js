let mainFun = prompt("Please enter what operation you want to perform:\n 1. Add\n2. Substract\n3. Multiply\n4. Divide");

let firstNum = parseInt(prompt("Enter your first number:"));
let secondNum = parseInt(prompt("Enter your second number:"));

if((isNaN(firstNum)) || (isNaN(secondNum))) {
    document.body.innerHTML += `Please enter a valid input`;
} else {
    let mathFun = (mainOperation, numOne, numTwo) => {
        if(mainOperation == 1 || mainOperation == "Add" || mainOperation == "add") {
            add(numOne, numTwo);
        } else if(mainOperation == 2 || mainOperation == "Substract" || mainOperation == "substract") {
            sub(numOne, numTwo);
        } else if(mainOperation == 3 || mainOperation == "Multiply" || mainOperation == "multiply") {
            mul(numOne, numTwo);
        } else if(mainOperation == 4 || mainOperation == "Divide" || mainOperation == "Divide") {
            div(numOne, numTwo);
        } else {
            document.body.innerHTML += `Please enter a valid input`;
        }
    
        function add(numOne, numTwo) {
            document.body.innerHTML += `The result of addition of ${numOne} and ${numTwo} is: ${numOne + numTwo}`;
        }
    
        function sub(numOne, numTwo) {
            document.body.innerHTML += `The result of Substration of ${numOne} and ${numTwo} is: ${numOne - numTwo}`;
        }
    
        function mul(numOne, numTwo) {
            document.body.innerHTML += `The result of Multiplication of ${numOne} and ${numTwo} is: ${numOne * numTwo}`;
        }
    
        function div(numOne, numTwo) {
            document.body.innerHTML += `The result of Division of ${numOne} and ${numTwo} is: ${numOne / numTwo}`;
        }
    }
    mathFun(mainFun, firstNum, secondNum);
}


// Function inside function simple explanation
let mulFuc = () => {
    let fun1 = () => {
        document.body.innerHTML += `Inside Function 1<br>`;
    }
    let fun2 = () => {
        document.body.innerHTML += `Inside Function 2<br>`;
        fun1();
    }
    document.body.innerHTML += `<br><br>Inside Function MalFun<br>`;
    fun2();
}
mulFuc();