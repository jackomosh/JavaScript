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


let user1 = makeUser("Jack", 20)
alert(user.name)
alert(user.age)

// special operator "in"

"key" in Object

// eg

let user2 = {name: "Hike", age: "21"};

alert("age" in user2) // returns true as the value is present
alert("location" in user2) // returns false as the value is not present

let user3 = {age: 23};

let key = "age"
alert(key in user3)

// to walk over all keys of an object for..in loop

let user4 = {
    name: "Jack",
    age: 25,
    isAdmin: true
};

for (let key in user4) {
    alert(key); // we get the keys of the object
    alert(user4[key])
};

// ordered in a special fashion, ascending order used for ints

let codes = {
    "+256": "Uganda",
    "+254": "Kenya",
    "+255": "Tanzania",
    "+1": "USA"
};

for (let code in codes) {
    alert(+code)
}
