'use strict'

// create an empty object

// let user = {}; // object literal syntax
// let user = new Object(); // object constructor

// Literals and Properties

let user1 = {
    name: "Jack",
    age: 20,
    isAdmin: true,
    "Like Birds": true // if we want to use multiword properties they must be quoted
};

delete user1.age // brings undefined since the property has been deleted
delete user1["Like Birds"] // also use [] when deleting multiword keys or property names

console.log(user1.name);
// alert(user1.age);

// Accessing the values using keys

let user2 = {
    name: "John",
    age: 20,
};

let key = prompt("What do you want to know about the user?", "name")

alert(user2[key]) // But the . notation cannot be used in a similar way

