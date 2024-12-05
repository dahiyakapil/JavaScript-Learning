/*
    Block - 
    A block scope is helpful there where we have to run multiple statements 
    A block is just a curly braces where we execute our multiple statments
    A block {} is used to combine or group the multiple statments all together.

    Block Scope -
    A block scope is a scope where variables and function lies, we can access them in that block scope.

    Hoisting in block scope
    When we declare let and const in block scope, let and const are hoisted in separate memory space [Named Block Scope] 
    let and const has the space and the name of that scope is Block. where the let and const varibales are placed and firstly the undefined placeholder is reserved for let and const

    Shadowing -
    When we have same named variable outside the block scope then the variable present in the block scope shadows the outside varible from block scope.
    And the value will be modified according to the varible present in the block scope.
    Reason: The value is modified because they are pointing to the same memory location that is the Global scope.

    But let and const behaves different in shadowing.


 */

if (true) console.log("This is single line"); // single statment

// but when we want to write multiple line in condition or in for loop then we use block scope


var a = 200; // Shadowing the varible
let b = 499;
{
  var a = 500; // gloabl scope
  let b = 20; // another scope [Block Scope]
  const c = 30; // another scope [Block Scope]

  console.log(a); // Can access inside block and outside of the block
  console.log(b); // can be accessible inside the block scope only
  console.log(c); // can be accessible inside the block scope only
}

console.log(a); // Can access inside block and outside of the block

// console.log(b); // Cannot access outside of the block scope Reference Error: b is not defined
// console.log(c); // Cannot access outside of the block scope Reference Error: c is not defined

console.log(b); // varibale b is now in Script scope that is different from the block scope