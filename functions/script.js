'use strict'

// function declaration

function showMessage() {
    alert('Hello')
};

// after creating the function we need to call it

showMessage();

// A variable declared inside a function is only visible to that function - is a local variable

function helloUser() {
    let userName = 'Jack' // local variable
    alert(userName);
}

helloUser()

// Global or Outer Variables

let userLocation = 'Kisumu'

function locationAddress() {
    let city = 'Welcome to: ' + userLocation //userLocation is a global or outer variable
    alert(city)
}

locationAddress()

// if a local variable is also declared the global one is ignored and the local one is used.

// Parameters

// we can pass data to functions using parameteres

function zoneKisumu(name, location) {
    alert(name + ': ' + location)
}

zoneKisumu('Zone', 'Kisumu');

// default values - when a function is called but an argument not provided

// eg

function undefinedParam(firstName, lastName = 'Omondi') { // in the next param we have given it a default value if not given
    alert(firstName + ' ' + lastName)
}

undefinedParam('Jack')

// alternative default parameters

function alternativeDef(text) {
    if (text == undefined) {
        text = 'empty message'
    }
    alert(text)
}

alternativeDef()

// Returning a value

function sum(a, b) {
    return (a + b)
}

let result = sum(1, 2)
alert(result)

// check age and grant access

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?')
    }
}

let age = +prompt('How old are you', 18)

if (checkAge(age)) {
    alert('Access Granted')
} else {
    alert('Access Denied')
}

// separating functions

// function showPrime(n) {
//     nextprime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextprime
//         }
//         alert(i)
//     }
// }

// showPrime(10)

// lets break the showPrime function to use a helper function

function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue
        alert(i)
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false
    }
    return true
}

showPrimes(10)
