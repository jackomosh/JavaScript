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