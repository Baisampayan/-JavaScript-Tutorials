var fullName = prompt("Enter Your Name:");
var age = parseInt(prompt("Enter Your Current Age"));
var increaseAge = parseInt(prompt("After how many years do you want to know your age?"));
var Result = "Hi, " + fullName + " your age is " + age + "<br>And After " + increaseAge + " years, your age will be " + (age + increaseAge);
document.body.innerHTML ="<h2>" + Result + "</h2>";