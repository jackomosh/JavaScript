'use script'

// loops: while and for

// The while loop

let i = 3;

while (i) {
    alert(i)
    i--
};

// Do while loop

let j = 0;

do {
    alert(j)
    j++
} while (j < 3);

// For loop

let k = 0;

for (k = 0; k < 5; k++) {
    alert(k)
}

let sum = 0;

while (true) {
    let value = +prompt('Enter a number', '')
    if (!value) break; // break tells a loop to stop and return
    sum += value;
}
alert('Sum: ' + sum)

for (let i = 0; i < 10; i++) {
    if (i % 2) {
        alert(i)   
    }
}