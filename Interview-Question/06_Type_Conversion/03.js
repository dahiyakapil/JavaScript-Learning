/*
    How is explicit type conversion implemented in JavaScript?
    
    Explicit type conversion in JavaScript is implemented using built-in functions that convert values of one type to another type. These functions include Number(), String(), Boolean(), and parseInt().
*/

// Conversion from string to number
let str = "123";
let num = Number(str);
console.log(num);
console.log(typeof num);

// Conversion from number to string
let num2 = 10;
let str2 = String(num2);
console.log(str2);
console.log(typeof str2);
