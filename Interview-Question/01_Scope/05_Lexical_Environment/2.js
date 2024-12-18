/*


    How does lexical scoping affect nested functions?

    Lexical scoping significantly impacts nested functions in JavaScript by determining which variables the nested functions can access. A nested function can access variables defined in its own scope as well as those in its parent and ancestor scopes, due to the scope chain.

    Key Effects of Lexical Scoping on Nested Functions:

    1. Access to Parent Variables:
    A nested function has access to variables declared in its parent function or any outer scopes.
    This behavior is fixed at the time the function is declared and does not depend on where the function is invoked.

    2. Isolation of Inner Variables:
    Variables declared inside a nested function are not accessible to the parent function or sibling functions unless explicitly returned or exposed.
    
    3. Closure Formation:
    When a nested function "remembers" the variables from its lexical scope (even after the parent function has returned), it forms a closure. This allows the nested function to persistently access those variables.

*/

// Access to parent variables
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();

// Innner Scope Isolation... Parent function cannot access the inner function vairables

function parent() {
  let a = 20;
  function child() {
    let b = 30;
    console.log(a);
    console.log(b);
  }
  child();
  console.log(a);
  console.log(b);
}
parent();


