/*
    What is block scope in JavaScript, and which keywords enable it?

    So first of all, a block is just a curly braces where we execute the multiple statments.
    A block scope is a scope where we can access the variables or function inside that block only but not from outside of that block. The varibale are written inside the curly braces.

    Keywords that enable Block Scope:

    let and const

    1. Let: 
    - variable declare with let are block scoped.
    - They are accessible only inide the block.
    - They do not become properties of the window object in the browser, they have different memory space in which they are placed.
    - let variables are not re-declared within the same scope.

    2. Const: similar to let
    - variable declare with const are block scoped.
    - They are accessible only inide the block.
    - They do not become properties of the window object in the browser, they have different memory space in which they are placed.
    - const is used to declare constants, and their values cannot be reassigned after initialization.


    Key Features: 
    1. Isolation of Variables: 
      Block scope helps avoid variable conflicts, especially in loops and nested blocks.
    2. for Loop Usage:
      let is commonly used in for loops because it creates a new variable for each iteration, preserving the loop's state within closures.
      
*/

{
  let a = 10;
  const b = 20;

  console.log("a inside block: ", a);
  console.log("b inside block: ", b);
}

console.log(a); // Uncaught ReferenceError: a is not defined
