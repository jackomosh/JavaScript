// RECAP

// To fully enable all modern features of JavaScript we use 'USE STRICT' mode

'use strict';

// without use strict, the code will still work but some features behave in an old fashioned way.

// Variables can be declared using.

let name = 'jack' // var can change
const b = '' // var cannot change
var c = '' // old style

// variables are dynamically typed, they can store any value.

// There are 8 data types

// number, string, boolean, null, undefined, object, symbol, Bigint

// the typeof operator return the type of a value 

typeof name // string

// Interactions.

// We have been using the propmt, confirm, alert to get user interactions. All these are called modal. they pause the code execution and prevent the visitor from interacting with the page until they choose an option.

// Example

let userName = prompt('What is your name?');
let wantedTea = confirm('Do you want some tea?')
alert('Visitor: ' + userName);
alert('Tea Wanted: ' + wantedTea);

// Operators

// strict ===
// assignment =
// equality ==

// switch statements and if statements can be used interchangebaly

// we have three ways of writing a function, declaration, arrow function and expression.
