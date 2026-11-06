// the for..in and for..of loops

// behaviour with arrays

const fruits = ["apple", "banana", "cherry"];

// using a for...in loop gets the indexes/keys

for (index in fruits) {
    console.log(index)
}

// using the for...of gets the values

for (fruit of fruits) {
    console.log(fruit)
}

// behaviour with objects

const user = {
    name: "John",
    age: 25,
};

for (const key in user) {
    console.log(key)
    console.log(user[key])
};

// for...of here does not work since user is not iterable

// for (const name of user) { 
//     console.log(name)
// }