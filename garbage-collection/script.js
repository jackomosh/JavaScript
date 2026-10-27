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

