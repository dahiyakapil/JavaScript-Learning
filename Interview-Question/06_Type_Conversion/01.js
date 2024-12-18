/*
    What are the two types of type conversion in JavaScript?

    Two types of type conversions are:
    1. Implicit Conversion
    2. Explicit Conversion

    There are two types of type conversion in JavaScript: implicit (coercion) and explicit (casting). Implicit occurs automatically when the interpreter converts data types.
    Explicit type conversion in JavaScript is implemented using built-in functions that convert values of one type to another type. These functions include Number(), String(), Boolean(), and parseInt().

*/

let num = 5;
let str = "10";
console.log(num + str); // Automatically Implicit Coersion

let str2 = "10";
let num2 = 5;
const result = Number(str2) + num2; // Explicit Conversion using Number() function
console.log(result);
