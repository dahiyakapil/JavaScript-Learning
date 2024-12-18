"use strict"


// this in global scope 
console.log(this)

// gobal object (window) in chrome browser but in nodejs env the value be global , globalObject - window, global


/* 
    this inside a function
    this behaves different in strict mode or in non-strict mode

    in function this returns as a window  

    if the vlaue of this is undefined or nul l
    then this keyword will be replaced with globalObject only in non-strict mode

    this keyword value depends on how the function is called (window.function_name()) or simply calling the fucntion in strict mode

*/

function x() {
    // this value depens on strict / non-strict mode
    console.log(this)
}
x();  // undefined in strict mode
window.x(); // windowObject weather the strict mode is on


// this inside non-strict mode - (this substitution)



/* 
    this inside a object's method 
    when function is defined inside object the function will be called as method

    must know about 
    call, applu and bind functions

*/ 


/*
    this inside in arrow function
    arrow function don't have this binding

    but they hold the value in enclosing lexical context or scope
    this behave like this is present in global space
*/

const obj = {
    a : 10,
    x: () => {
        console.log(this);
    },
}

console.log("this will behave like: ");
obj.x();

