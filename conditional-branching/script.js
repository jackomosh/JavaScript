'use strict'

// the if statement evaluates a condition of code and if the result is true, it executes

let team = prompt("Which is the last team to win the World Cup?", '');
if (team == "Spain") {
    alert("Correct");
} else {
    alert("Incorrect")
}

let year = prompt("What year were you born", "")
if (year < 1980) {
    alert("You are a baby boomer")
} else if (year > 1995 && year < 2002) {
    alert("You are a Millenial")
} else {
    alert("You are a GenZ")
}

// Sometimes we need to asssign a variable depending on a condition

let accessAllowed;
let age = prompt("What is your age?", "");
if (age < 18) {
    accessAllowed = false;
} else {
    accessAllowed = true;
}
alert(accessAllowed)

let number = prompt("Pick a number?", "") 
if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else (
    alert(0)
)