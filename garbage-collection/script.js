'use strict'

// the main concept of memory managemnt in JS is reachability

// example 

let user = {
    name: "John",
};

let admin = user;

user = null;


alert(admin.name)

// interlinked objects

// interconnected objects example

function family(man, woman) {
    woman.husband = man;
    man.wife = woman

    return {
        father: man,
        mother: woman,
    }
};

let family = marry({
    name: "Jack"
}, {
    name: "Ann"
});

delete (family.father)
delete family.mother.husband

// summary: Garbage collections is performed automatically, we cannot force or prevent it