/*
    What is closure

    A closure is the combination of function bundled together with it's parent's lexical environement is called closure.

    Each and every function in JS has access to the outer lexical envionment that means 
    it has access to the variables and functions that are present in the parent's lexical enviornment. 
    Even if the function is executed in some other scope instead of it's orignal scope
    (local scope) it will still remember the outer's lexical enviornment where it was originally present in the code.


*/

function outer() {
  // lexical enviornment
  let a = 20;
  inner();
  function inner() {
    console.log(a);
    console.log(b);
  }
  console.log(a);
}

let b = 100;
outer();
