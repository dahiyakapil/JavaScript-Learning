"use strict";

/*
    How does the this keyword relate to scope in JavaScript?

    In JavaScript, the this keyword refers to the object that is currently executing the code. While this is related to execution context rather than traditional scope, the way it behaves is influenced by where and how it is used in the code. Here's how it relates to scope in different contexts:

    1. Global Scope
    In the global scope, this refers to:
    The window object in browsers.
    The global object in Node.js (outside of modules).
    In strict mode, this is undefined in the global scope.

    2. Function Scope
    Inside a regular function, this refers to the object that calls the function:

    If called as a method of an object, this refers to that object.
    If called as a standalone function, this refers to the global object (window in browsers or global in Node.js).
    In strict mode, this is undefined when the function is called standalone.

    3. Arrow Functions and Lexical Scope
    Arrow functions do not have their own this. Instead, they inherit this from the surrounding lexical scope.

    4. Object Scope
    When a function is called as a method of an object, this refers to the object.

    5. bind, call, and apply
    The this value can be explicitly controlled using bind, call, or apply.

    6. Inside a Constructor
    In constructors or classes, this refers to the newly created object.

*/

// this in Global Space
var a = 10;

console.log(this); // "this" will have a value of global object... window object and here global object is a JavaScript Runtime Enviournment... On browser it is different and on node.js it is different..... The value of the this keyword in browser is window and in Node.js it is Global
console.log(this.a);
console.log(window.a);

// this inside a function
function x() {
  // this value depend on strict / non strict mode
  console.log(this); // undefined when using the strict mode
}

// this keyword works differently in strict mode or in non-strict mode

//this inside non-strict mode - (this substitution)
/*
this inside non-strict mode - (this substitution)

NOTE: if the value of this keyword is undefined or null, this keyword will be replaced with globalObject only in non strict mode 
*/

// this keyword value depends on how this is called, how the function is called

x(); // invoking the function normally.... undefined
window.x(); // now calling the function in different way... window object

// this inside a object's method
/*
    difference between function and method

    when we create a function inside object then it called a method

    when we call this keyword in object's method then value of the this keyword will be the object itself
*/
const obj = {
  age: 20,
  fun: function () {
    // console.log(this) // this will reference to the obj
    console.log(this.age); // this will reference to the obj and this.a will reference to property age:20
  },
};
obj.fun();


