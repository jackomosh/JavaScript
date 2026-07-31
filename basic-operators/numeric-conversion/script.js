'use strict'

// The unary + operator when applied to a single numebr does not do anything but when applied to an operand that is not a number it converts it to a number

let x = 1
alert(+x)

let y = -2
alert(+y);

alert(+true)
alert(+"")

// the binary plus + concatinates strings

let apples = "2"
let oranges = "3"
alert(apples + oranges);

alert(+apples + +oranges) // if we need to convert them to numbers then sum them up
