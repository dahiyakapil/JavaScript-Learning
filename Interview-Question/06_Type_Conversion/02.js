/*
    What is the difference between explicit and implicit type conversion?

    Interview Response: Explicit type coercion involves using specific methods, or functions, to convert data types intentionally, while implicit coercion happens automatically, when the interpreter coerces data types without explicit or direct instruction.
*/

let num = 8;
let str = "10";
const result = num + str; // Implicit coersion
console.log(result);

let num2 = 8;
let str2 = "10";
let result2 = num2 + Number(str2); // Expilit Conversion using Number function
console.log(result2);
