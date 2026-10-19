'use strict'

let fruit = prompt("Which fruit do you want to buy", "apple");

let bag = {
    [fruit]: 5,
};

alert(bag.apple)

// Property value shorthand

function makeUser(name, age) {
   return {
    name,
    age,
   }
};

// We can use both normal and shorthand

let user = {
    name, // declare shorthand
    age: 20 // declare normal
};


let user = makeUser("Jack", 20)
alert(user.name)
alert(user.age)

