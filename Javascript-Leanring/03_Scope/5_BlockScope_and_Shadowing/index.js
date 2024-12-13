/*
    Block - 
    A block is just a curly braces where we execute our multiple statments
    A block scope is helpful there where we have to run multiple statements 
    A block {} is used to combine or group the multiple statments all together.

    Block Scope -
    A block scope is a scope where variables and function lies, we can access them in that block scope only but outside from that block we can not access the variable or function.

    Hoisting in block scope
    When we declare let and const in block scope, let and const are hoisted in separate memory space [Named Block Scope]. 
    let and const has the Block space and the name of that scope is Block, where the let and const varibales are placed and firstly the undefined placeholder is reserved for let and const.

    Shadowing -
    When we have same named variable outside the block scope then the variable present in the block scope shadows the outside varible from block scope.
    And the value will be modified according to the varible present in the block scope.
    Reason: The value is modified because they are pointing to the same memory location that is the Global scope.

    But let and const behaves different in shadowing.

    Key Points:
    1. Code inside curly bracket is called block.
    2. Multiple statements are grouped inside a block so it can be written where JS expects single statements like in if, else, loop, function etc.
    3. Block values are stored inside separate memory space than global. They are stored in block. (the reason let and const are called block scope)
    4. Shadowing of variables using var, let and const.
    5. The shadow should not cross the scope of original otherwise it will give error.
    6. shadowing let with var is illegal shadowing and gives error.
    7. var value is stored in nearest outer function or global scope and hence can be accessed outside block as well whereas same is not the case with let and const.

    So there are three Scope
    1. Global Scope --> Var 
    2. Script Scope --> let and const
    3. Block Scope ---> let and const


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
