// Tasks

let user = {};
user.name = "John";
user.surname = "Smith"
user.name = "Pete"
delete user.name

// check for emptiness

let schedule = {};

alert(isEmpty(schedule)); // returns true

schedule["5:00"] = "get up"; // value is set

alert(isEmpty(schedule)) // returns false

function isEmpty(obj) {
    for (let key in obj) {
        return false
    }
    return true
}

// sum object properties

let salaries = {
    jack: 100,
    hike: 130,
    james: 160
};

// alert(salaries.jack + salaries.hike + salaries.james)

let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}

alert(sum)

// Multiply numeric property values by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu);