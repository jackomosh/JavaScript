'use strict'

// Increment increases a variables value by 1

let count = 1
count = count + 1 // we can also use count++
alert(`Count is: ${count}`);

// Decrement decreases a variables value by 1
let counter = 0
counter++
alert(`Counter is now ${counter}`);

let counts = 0
alert(counts++); // Should return 0

// The ++ and -- can be used inside an expression as well.

let total = 1
alert(2 * ++total) // Value of total becomes 4 (2 * 2)

let totals = 1
alert(2 * totals++) // Value of totals becomes 2 (2 * 1)

let mostCount = 1
alert(2 * mostCount)
mostCount++;