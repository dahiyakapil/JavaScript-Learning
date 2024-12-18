/*
    What is the scope chain in JavaScript?

    The mechanism of searching variables in the subsequent lexical environments is known as Scope Chain. If a variable is not found anywhere, then we say that the variable is not present in the scope chain.

    The JS engine first searches for a variable in the current local memory space, if its not found here it searches for the variable in the lexical environment of its parent, and if its still not found, then it searches that variable in the subsequent lexical environments, and the sequence goes on until the variable is found in some lexical environment or the lexical environment becomes NULL.
*/

function parent() {
  console.log(a); // undefined until the value has been declared
  var b = 20;
  child();
  function child() {
    console.log(b); // 20
  }
  console.log(x); // 50
}

var a = 10;
var x = 50;
parent();
