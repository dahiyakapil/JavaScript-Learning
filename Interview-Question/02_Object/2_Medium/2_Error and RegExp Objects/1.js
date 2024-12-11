/*
    What is an error object

    An Error object in JavaScript is a built-in object that represents runtime errors. It provides information about what went wrong during program execution, including an error message and the location where the error occurred. Error objects are commonly used for debugging and handling exceptions in code.


    Types of Errors in JavaScript


    Error Type	        Description
    Error	            The generic error object. Used for user-defined errors.
    TypeError	        Raised when a value is not of the expected type.
    ReferenceError	    Raised when trying to access a variable that does not exist.
    SyntaxError	        Raised when there is a syntax error in the code.
    RangeError	        Raised when a number is outside its allowable range.
    URIError	        Raised when there is an error in URI handling (e.g., decodeURIComponent).
    EvalError	        Raised when eval() is used incorrectly (rarely used today).
    AggregateError	    Represents multiple errors (e.g., in Promise.any).
*/

const error = new Error("Something went wrong!");
console.log(error.name);    // "Error"
console.log(error.message); // "Something went wrong!"
console.log(error.stack);   // Displays the stack trace

try {
    throw new Error("Custom error occurred!");
} catch (error) {
    console.log(error.name);    // "Error"
    console.log(error.message); // "Custom error occurred!"
    console.log(error.stack);   // Stack trace
}
