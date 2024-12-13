/*
    What is function scope, and how does it differ from block scope?

    1. Funtion Scope:
     - A variable is function scoped if it is accessible only within the function where it is declared.
     - Variables declared with var have function scope, means they are accessible throught the function.

     Key Characteristics of Function Scope:
    - Only applies to var.
    - Variables declared inside a function cannot be accessed outside of it.

    2. Block Scope
    - A variable is block-scoped if it is accessible only within the block ({}) where it is declared.
    - Variables declared with let and const have block scope.
    - Block scope respects curly braces, such as those used in loops, if statements, and other code blocks.

*/

function funScopeUsingVar() {
  var a = 10;
  let m = 30;
  if (true) {
    var b = 20;
  }
  if (true) {
    let n = 50;
  }
  console.log(a);
  console.log(b);
  console.log(m);
  // console.log(n); //  ReferenceError: n is not defined
}

funScopeUsingVar();
console.log(a); // ReferenceError: a is not defined, can not access outside of the function scope

function getScope() {
  if (true) {
    let x = 30; // Block-scoped to this `if` block
    const y = 40; // Block-scoped to this `if` block
  }
  console.log(x); // ReferenceError: a is not defined
  console.log(y); // ReferenceError: b is not defined
}
getScope();
