/*
    Explain the difference between var, let, and const in the global scope. 
    
    Var - Global or function Scope, Can be redecalre with same name, Can reassgin the vale
    let - Block Scope, Can't be redeclare with same, Can reassign the value
    const - Block Scope, Can't be redeclare with same, Can't reassign the value

    Hoisting
    Var is hoisted
    let is hoisted but in different way: TDZ
    const is also hoisted in different way: TDZ
*/

var a = 10;
let b = 20;
const c = 30;

// Scope of varibales
console.log("var a: ", a); // Globel Scope
console.log("let b:", b); // Block Scope
console.log("const c: ", c); // Block Scope

var a = 50; // Can re-decalre with same name and can assign the value
// let b = 60; // Can't re-decalre with same name and can't assign the value
// let c = 70; // Can't re-decalre with same name and can't assign the value

b = 60;
// c = 70; // Uncaught TypeError: Assignment to constant variable.

console.log("var a re-assign: ", a);
console.log("let b re-assign: ", b);
// console.log(c);

console.log("Hoisting-------------------");

console.log(m); // hoisted at the top
var m;

// console.log(n);
/**
    
    Temporal Dead Zone

    Refrence Error: Cannot access n before initialization

 */
const n = 50;

function getScope() {
  var a = 100;
  a = 500;
  b = 200;
  console.log("Inside function Scope, value of var a : ", a);
  console.log("Inside function Scope, value of let b : ", b);
}
getScope();
console.log("In Global Scope value of var a: ", a);
console.log("In Global Scope value of let b: ", b); // cause b is block scope variable and it will shadow the value
