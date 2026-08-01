'use strict'

alert(2 > 1); // Should return true
alert(2==1); // Returns false
alert(2 != 1); //Returns true

// A comparison result can be assigned to a variable

let result = 5 > 4
alert(result) // return true

// String comparison - strings are compared letter by letter

alert("z" < "a") // false
alert("Glow" > "Jacomondi") // false
alert("Bee" > "Be") // true


// comparison of different types

// When comparing values of different types JS converts them values to numbers

alert("2" > 1) // true since "2" is converted to a number
alert("1" == 1) // true since "1" is now 1

// For boolean values true becomes 1 and false 0

alert(true == 1)
alert(false == 0)

// strict equality conversion

// Regular equality check ==

// A regular equlity check has a problem, it cannot differentiate 0 from false

// This happens because operands of different types are converted to numbers by the equality operator ==
alert(0 == false) // true 
alert("" == false) // true

// Strict equality check ===
// Checks the equality without type conversion

alert(0 === false) // false since 0 is a number and false is a boolean

// comparison with null and undefined
// for a strict equality check === these values are different

alert(null === undefined) // false

// For non strict or reqular equality theres a special rule

alert(null == undefined) // true