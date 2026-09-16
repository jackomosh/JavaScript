'use strict'

// arrow functions

// looks like

// let func = (arg1, arg2, ..., argN) => expression; 

let sum = (a, b) => a + b;
alert(sum(1,2))

let double = n => n * 2;
alert(double(3))

let sayHi = () => alert('Hello');
sayHi();

let age = prompt('What is your age?', 18)

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert('Welcome');
welcome()

// Multiline arrow function

let sub = (a, b) => {
    let result = a - b;
    return result
}
alert(sub(2, 1))