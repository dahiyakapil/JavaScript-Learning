/*
    When do numeric conversions happen in JavaScript?

    Numeric conversions occur during arithmetic operations, comparison operations using the equality operator, or when explicitly converting a value using methods, like Number(), parseInt(), or parseFloat().

*/

// Implicit Numeric Conversion with Mathematical Operators:

let str = '123';
let res = str / 3;
console.log(res)


// Explicit Numeric Conversion with Number() Function:

let bool = true;
let result = Number(bool); // bool is explicitly converted to a number.
console.log(result);       // Output: 1
