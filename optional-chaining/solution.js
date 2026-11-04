'use strict'

// optional chaning ?. is a safe way to access nested objects properties
// the non-existing property problem.
// lets say we have an object that stores users in our system and their info eg. user.address and user.address.street, but some users did not provide the street
// if we try to get the user.address.street we get an error

// eg

let user = {};

alert(user.address && user.address.street && user.address.street.name); //error

// in many cases in web dvelopment, we'd like to get undefined instead. thus we will use an element querySelector
// using document.querySelector('.elem');

let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// Optional Chaining using ?

let name = {};

alert(name?.address?.street);

// using the ? with a querySelector

let h1 = document.querySelector('.h1')?.innerHTML;