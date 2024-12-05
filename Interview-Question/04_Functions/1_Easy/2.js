/*

    What is an anonymous function
    
    An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. 

    Rules for writing the anonymous function
    1. The function has no name.
    2. Use the function keyword, followed by parentheses () for parameters and curly braces {} for the function body.
    3. Anonymous functions can accept parameters and return values like regular functions.
    4. Anonymous functions assigned to variables cannot be invoked before their definition. Unlike named functions, they are not hoisted
*/

// Simple Anonymous function
const zoo = function () {
  console.log("This is anonymous function");
};

zoo();

// Passing param to the anonymous function
const calculate = function (a, b) {
  return a + b;
};
console.log(calculate(2, 3));

// Can not be hoisted

// Will thorw an error : ReferenceError: Cannot access 'multiply' before initialization
// console.log(multiply(3, 5))

const multiply = function (x, y) {
  return x * y;
};

// Anonymous function As callback function
setTimeout(function () {
  console.log("This is callback function which will invoked after 5 seconds");
}, 5000);
