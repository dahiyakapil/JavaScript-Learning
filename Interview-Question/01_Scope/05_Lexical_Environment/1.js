/*
    What is lexical scope, and how is it determined in JavaScript?

    Lexical environment is the local memory along with the lexical environment of its parent. Lexical as a term means in hierarchy or in sequence. 


*/

function outer() {
  let a = 20;
  const b = 30;
  var c = 40;
  function inner() {
    let d = 100;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  inner();
  console.log(d);
}

// console.log(a);
// console.log(b);
// console.log(c);
outer();
