/*

    MDN Docs
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function

    Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

 */

function x() {
  var a = 10;
  function y() {
    b = 100;
    console.log(a);
  }
  y();
  function z() {
    console.log(b);
  }

  z();
}

console.log(200)
x();
