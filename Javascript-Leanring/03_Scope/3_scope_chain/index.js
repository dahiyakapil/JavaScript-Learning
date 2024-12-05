/*
    Scope is basically a boundary - Gloabl scope, function scope, block scope
    Lexical enviornment is just a parent hirarchy

    1. Scope of a variable is directly dependent on the lexical environment.
    2. Whenever an execution context is created, a lexical environment is also created. Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in     hierarchy or in sequence.
    3. Having the reference of parent's lexical environment means, the child or the local function can access all the variables and functions defined in the memory space of its lexical parent.
    4. The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
    5. The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.
*/

function parent() {
  console.log(a); // fisrtly undefined in exexcution context then it finds the value in gloabl scope
  var b = 20;
  child1();
  function child1() {
    console.log(b); // it is present in lexical env of parent()
  }
  console.log(x); // not defined in local memory, it will search in its local memory and as it is not present in its local memory then it will search its parent lexical env that is the global scope and the variable x is present in the global scope. So it will print the variable in the console.
}

var a = 10; // in gloabl scope
var x = 50; // in global scope
parent();

/*
    A Exection context is created when the parent() is invoked then memory creation phase and code phase is created along with GEC is created in call stack
    Function parent() is invoked and then it searches for a 
    condtion for searching of a
        - if it is present in gloabl scope
        - if it is present in lexixal env (function local memory space)
        - or i if it present in subsequent lexical env
        - it it does not found then the lexical env will be null

        as variable is in gloabl scope so value of a is printed inside the parent()
*/
