/*
    What happens when a variable in the parent scope has the same name as a variable in the child scope?

    When a variable in the parent scope shares the same name as a variable in the child (nested) scope, the variable in the child scope shadows the variable in the parent scope within that child scope. This means the child scope's variable takes precedence, and the parent scope's variable becomes inaccessible within the child scope.

    This behavior is known as variable shadowing.


    Key Points to Understand:

    1. Child Scope Precedence:
    If a variable is declared in both parent and child scopes with the same name, the child scope's variable is used within that scope.
    The parent scope's variable remains unaffected and accessible outside the child scope.
    
    2. Scope Chain Lookup:
    When accessing a variable, JavaScript starts searching in the current scope and proceeds outward through the scope chain.
    If a variable with the desired name is found in the current scope, it stops searching further.

    3. No Impact on Parent Scope:
    Shadowing a variable in the child scope does not modify the variable in the parent scope; the two are distinct.
*/

function outer() {
  var a = 10;
  function inner() {
    var a = 100;
    console.log(a);
  }
  inner();
  console.log(a);
}
outer();


// when using with var
function parent() {
  var x = 10;

  if (true) {
    var x = 20; // Shadows the outer x within the same function
    console.log(x); // Logs: 20
  }

  console.log(x); // Logs: 20 (var is function-scoped, not block-scoped)
}

parent();
