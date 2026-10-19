'use strict'

let message = "Hello";
let phrase = message;

alert(phrase)

let user = {name: "John"};

let admin = user
admin.name = 'Jack'

alert(user.name)

// const objects can be modified, an object declared as a const can be modified

const name = {
    user: "James",
};

name.user = "Hike"

alert(name.user)

// cloning objects properties to another

let clone = {};

for (let key in user) {
    clone[key] = user[key]
}

alert(clone.name)

// using the object.assign method

let country = {capital: "KIsumu"};

let permission1 = {canVisit: true};
let permission2 = {canPic: false};

Object.assign(country, permission1, permission2);

alert(country.canVisit)
alert(country.canPic)

console.log(country);

// simple object cloning

let clone2 = (Object.assign({}, country));

console.log(clone2)