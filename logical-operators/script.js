'use strict'

// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// OR || operator on booleans

alert(true || true) // true
alert(true || false) // true
alert(false || false) // false
alert(false || true) // true


// OR operator in an if statement

let hour = 9;
if (hour < 10 || hour > 18) {
    alert('We are closed')
}