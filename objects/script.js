'use strict'

// Objects store key value pairs with key always as a string and a value can be anything

let user = {
    name: 'Jack',
    age: 20,
    isAdmin: true,
    "like birds": true // when we want a multiword property name
}

delete user.age // deleting a property
user.age = 21 // add a property to the object
delete user["like birds"];

// square bracket

let fruit = prompt('Name a fruit', 'apple');

let bag = {
    [fruit]: 5,
}

alert(bag.apple)

// Property value shorthand

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user1 = makeUser('Jack', 25)
alert(user1.name)