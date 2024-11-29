//What are the differences between undeclared and undefined variables

/*
    undeclared variables
    1. These types of variables are not declared in the environment.
    2. If you try to read the value of undecalred variables then a runtime error will be encountered.

    undefined variables
    1. These types of variables are declared but their values are not defined yet.
    2. If you try to the read the value of undefined varibales then a undefined value will be returned.

*/

// Undeclared variales

let x = 20;
// console.log(y); // not decalred

let y;
console.log(y) // undefined