'use strict'

// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// OR || operator on booleans

alert(true || true) // true
alert(true || false) // true
alert(false || true) // true
alert(false || false) // false


// OR operator in an if statement

let hour = 9;
let isWeekend = false;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('We are closed')
} else {
    alert("We are open")
}

let firstName = ""
let lastName = ""
let nickName = "superCoder"

alert(firstName || lastName || nickName);

// The && AND Operator - && returns true if both if both operands are true otherwise false

alert(true && true) // true
alert(true && false) // false
alert(false && true) // false
alert(false && false) // false

let h = 12;
let minute = 30;

if (h == 12 && minute == 30) {
    alert('The time is 12:30')
}

// !Not operator - returns the inverse of the value

alert(!true) // false

// check the login

let login = prompt('Who is there?');

if (login == 'Admin') {
    let password = prompt('What is the Password?')
    if (password === 'Master') {
        alert('Welcome')
    } else if (password === '' || password === null) {
        alert('Canceled')
    } else {
        alert('Wrong Password')
    }
} else if (login == '' || login === null) {
    alert('Canceled')
} else {
    alert('I don\'t know you')
}
