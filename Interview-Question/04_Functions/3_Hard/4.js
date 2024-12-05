/*
    What is an IIFE (Immediately Invoked Function Expression)
    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error
*/

(function () {
  console.log("Runs");
})();

(function () {
  const message = "This is secret message";
  console.log(message);
})();

console.log(message); // ReferenceError: message is not defined, it is out of the scope from the IIFE function


const res = function name () {
    console.log("Function Declaration")
}