'use strict'

// Here we assign x whatever the calculation brings from the right.
// So x is whatever 2 * 2 + 1 is

let x = 2 * 2 + 1
alert(x) // 5


// assignment = returns a value

let k = 1
let l = 2

let m = 3 - (k = l + 1)

alert(k) // 3 since the value of a changed to 3 when assigning c
alert(m) // 0 since 3-3 is 0

// chaining assignments

let a, b, c;

a = b = c = 2 + 2

alert(a)
alert(b)
alert(c)

// its better to split the code into
// c = 2 + 2
// b = c
// a = c

// Modify-in place

let n = 2
n = n + 5
n = n * 2

// Now the value of n is 14.

// we can also use it this way

let o = 2
o += 5
o *= 2 // the value of o is same

let t = 2
t *= 3 + 5
alert(t) // 16, since 3+5 is executed then multiplied by 2