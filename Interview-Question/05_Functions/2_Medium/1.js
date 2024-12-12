/*
    What are lambda expressions or arrow functions

    Lambda expressions or arrow functions in JavaScript are a concise way to write functions using the => (arrow) syntax. They were introduced in ES6 (ECMAScript 2015) and are often referred to as "arrow functions.



    Syntax Rules for writing the arrow function
    1. If there is only one parameter, parentheses can be omitted.
    2. If the body has only one expression, curly braces {} and the return keyword can be omitted.
    3. Multiple Parameters: (param1, param2) => expression
    4. Block Body (Multiple Statements):  
              (param1, param2) => {
              // multiple statements
               return expression;
              }
    5. No Parameters: () => expression
    6. Lexical this: Arrow functions do not have their own this. They inherit this from the surrounding context.


    Key Points: 

    1. Lexical this: Arrow functions do not create their own this; they inherit it from the enclosing execution context.
    2. Cannot be used as constructors: Arrow functions cannot be used with new.
    3. No arguments object: Arrow functions do not have their own arguments object; use rest parameters instead.
    4. No prototype: Arrow functions do not have a prototype property.


    When to Use Arrow Functions
    
    Use them for short, simple functions or callbacks, especially when you want to inherit this from the parent scope.
    Avoid them for methods in objects or classes where you might need a dynamic this.

*/

// 1. Basic Example
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5

//2. Single Parameter
// Traditional function
function square(x) {
  return x * x;
}

// Arrow function
const square = (x) => x * x;

console.log(square(4)); // Output: 16

// 3. No Parameters
// Traditional function
function greet() {
  return "Hello, World!";
}

// 4. With a Block Body
// Arrow function
const greet = () => "Hello, World!";

console.log(greet()); // Output: Hello, World!

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(4, 5)); // Output: 20

// 5. Arrow Functions and Array Methods

const numbers = [1, 2, 3, 4, 5];

// Using a traditional function
const doubledTraditional = numbers.map(function (num) {
  return num * 2;
});

// Using an arrow function
const doubledArrow = numbers.map((num) => num * 2);

console.log(doubledTraditional); // Output: [2, 4, 6, 8, 10]
console.log(doubledArrow); // Output: [2, 4, 6, 8, 10]
