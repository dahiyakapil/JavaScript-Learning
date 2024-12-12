/*
    What is an IIFE (Immediately Invoked Function Expression)
    
    IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


    The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables from the IIFE then it throws an error

*/

(function () {
  console.log("This is IIFE");
})();

(function () {
  const secretMessage = "This is secret messae";
  console.log(secretMessage);
})();

console.log(secretMessage); // ReferenceError: secretMessage is not defined
