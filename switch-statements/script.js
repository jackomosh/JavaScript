'use strict'

let a = 2+6;

switch (a) {
    case(3):
        alert('Too Small');
    break;
    case(4):
        alert('Exactly');
    break;
    case(5):
        alert('Too big');
    break;
    default:
        alert('I don\'t know')
}

// in swwitch statements types matters

// example 2

let b = +prompt('a?', '')

switch (b) {
    case(0):
        alert(0)
    break;
    case(1):
        alert(1)
    break;
    case(2):
    case(3):
        alert('2,3')
    break;
    default:
        alert('Guess not')
}