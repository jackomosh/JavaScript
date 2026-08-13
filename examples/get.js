// Declared some data to use in our example

const { use } = require("react");

const street = {
    number: 175,
    type: "boulevard",
    name: "Matabiau",
}

const address = {
    country: "France",
    town: "Toulouse",
    postalCode: 31000,
    street,
}

const userClement = {
    firstname: "Clement",
    lastname: "Denis",
    email: "cdenis@example.com",
    age: 29,
    address,
}

// Creating an array of users with 2 users

const users = [
    userClement,
    {
        firstname: "Sofiane",
        lastname: "Martinez",
        email: "smartine@example.com",
        age: 34,
        address: {
            country: "France",
            town: "St-Ouens",
            postacCode: 93400,
            street: {
                number: 78,
                type: "rue",
                name: "Garibaldi",
            }
        }
    }
];

const allowedCountries = ['France', 'Spain', 'Portugal', 'Russia', 'Iceland']

const coords = [
    [32, 45],
    [-38, 57],
    [87, 99],
    [57, -2],
    [-74, -29],
];

// Now that we have all these structures, lets see how to access values
// the first way to access values is using the square brackets and the key `['key']`

console.log(street['number']); // this will get the value of the property at the key [number]

console.log(street['name']); // here we get the name of the street

console.log(userClement['name']) // if we try to access a property that does not exist we get undefined

console.log(userClement['firstname'])
console.log(userClement['address']['town'])
console.log(userClement['address']['street'])
console.log(userClement['address']['street']['name']);

// How to access values properties of an array

console.log(allowedCountries[0])
console.log(allowedCountries[1])
console.log(allowedCountries[2])

// How to acess value properties of a nested array

console.log(coords[0][0]);
console.log(coords[0][1]);
console.log(coords[1][0]);
console.log(coords[1][1])
console.log(coords[2][0]);
console.log(coords[2][1]);

//Since keys are strings, we can use variables values to access our structures

const myKey = 'name'

console.log(street[myKey]); // our key is number and value of myKey
console.log(street['myKey']) // undefined
console.log(userClement['last' + myKey]);

// We can use operators of arrays too

const start = 1
let position = 0

console.log(allowedCountries[start + position++]);
console.log(allowedCountries[start + position++]);
console.log(allowedCountries[start + position++]);

// we can use the dot notation to access values

console.log(userClement.address.street.name);

// console is an Object and log is its property
// Javascript will always be converting keys to strings before accessing the Objects property

// Mixing arrays and Objects

console.log(users[1].address.street.number) // we take user at index 1 or user 2, then get the street number
console.log(users[0].address.street.number) // we take the first user, then get the street number