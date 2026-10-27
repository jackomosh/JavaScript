'use strict'

let user = {
    name: "John",
    age: 20
};

function sayHi() {
    alert('Hello')
};

user.sayHi = sayHi;

user.sayHi();


// this keyword

let jack = {
    county: "Kisumu",
    why: "wait",

    sayCounty() {
        alert(this.county);
    }
};

jack.sayCounty();

