/*

    MDN Docs
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.

    Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

    What are closures in JS?



 */
// var m = 10;

// function x() {
//   var a = 10;
//   function y() {
//     b = 100;
//     console.log(a);
//   }

//   function z() {
//     console.log(b);
//   }

//   return { y, z };
// }

// console.log(m);
// console.log(200);
// x();

// function parent() {
//   var owner = "Kapil";
//   function childA() {
//     var house = "Villa";
//     function childB() {
//       // We need to access the variables in the correct scope
//       var result = owner + " is the owner of this " + house;
//       return result;
//     }
//     return childB; // return reference to childB, not a function call
//   }
//   return childA(); // call childA to return childB reference
// }

// var output = parent(); // output is now a reference to childB
// console.log(typeof output); // will print "function"
// console.log(output()); // will execute childB and print "Kapil is the owner of this Villa"

// function outest() {
//   return function outer(b) {
//     var a = 10;
//     return function innner() {
//       console.log(a, b);
//     };
//   };
// }

// const res = outest()("Kapil"); // This will return outer function
// res(); // This will return innner function

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }

  // return function inner() { // 3rd way of returing function inside function... this is cool way and best way
  //   console.log(a);
  // }
  // inner(); // 1 way of returning the function ----> calling outside the outer() like this....
  return inner; // 2nd way of returning the function
}

// we can call the innner function with using only outer() .... This will work only when we are returning the function in outer function in this way ---> inner()
outer();

// but when we are returing the function from the outer function using the return keyword... return inner; Then we have to call the outer function two times then we can access the inner function

// const res = outer(); // This will call the outer function
// res(); // And this will call the inner function .... And there is a short-cut for this....... outer()()

outer()(); // In this the first curly braces are used for calling the outer function and second curly braces are used for calling the inner function

/*
  so in the closures example, we have a nested function in which there are basically two functions outer() and inner()
  when we are invoking the inner function.... the inner function remember the lexical environment of it's parent that is the outer function.
  so when are invoking the outer function the execution comes at the line number 66 console.log(a) and the refrence of a has been printed on the console.

  We have nested function inner() inside function outer() . inner() function have access to variable a which is present in it’s outer environment.
  Also, when you return inner() function and invoke outer() function, it will still console value of variable a . So, it remembered it’s outer lexical env even when called in other scope.

*/
