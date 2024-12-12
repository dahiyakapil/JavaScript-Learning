/*
    What is the Global Scope in JavaScript?

    The global scope in JavaScript refers to the outermost scope of a program. Variables or functions declared in the global scope can be accessed from anywhere in the program, unless shadowed by local variables.

    Any variable declared without a var, let, or const keyword automatically becomes a global variable (though this behavior is restricted in strict mode).
    Global variables and functions are properties of the global object.

    The global object provides the context for the global scope. Its name and behavior vary between environments:

    Browser: The global object is window.
    Node.js: The global object is global.


    Key Points
    1. var is attached to the global object (window or global), so it can be accessed via this.
    2. let and const are block-scoped and do not attach to the global object, so they cannot be accessed via this.
    3. Use let and const over var for safer and more predictable scoping in modern JavaScript.

*/

// Browser
console.log(window); // Prints the global `window` object
console.log(this); // Also refers to `window`
console.log(this === window);

var a = 10;
let b = 20;
const c = 30;

console.log(this.a);
console.log(this.b); // undefined cause let is block scoped variable
console.log(this.c); // undefined cause const is block scoped variable

// Node.js
console.log(global); // Prints the global `global` object
console.log(this); // Refers to `{}` in the global scope
var x = 10;
console.log(global.x); // undefined (not a property of `global`)
