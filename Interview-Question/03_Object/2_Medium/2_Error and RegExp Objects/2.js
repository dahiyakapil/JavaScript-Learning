/*
    What is the purpose of Error object

   An Error object in JavaScript is a built-in object that represents runtime errors. It provides information about what went wrong during program execution, including an error message and the location where the error occurred. Error objects are commonly used for debugging and handling exceptions in code.

*/

const withdraw = 300;
const balance = 200;
try {
  if (withdraw > balance) {
    throw new Error("Oops! You don't have enough balance");
  }
} catch (error) {
  console.log("Name of the Error: ", error.name); // "Error"
  console.log("Message of the Error: ", error.message); // "Custom error occurred!"
  console.log("Stack of the Error: ", error.stack); // Stack trace
}
