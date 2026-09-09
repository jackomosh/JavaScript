'use strict'

// The nullish coalescing operator is written as two question marks ??
// it returns the first defined value

let user;

alert(user ?? 'Anonymous');

let firstName = null
let secondName = null
let nickName = "superCoder";

alert(firstName ?? secondName ?? nickName ?? 'Anonymous');