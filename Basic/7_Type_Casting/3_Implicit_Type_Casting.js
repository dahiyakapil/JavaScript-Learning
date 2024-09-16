/*
    Implicit type conversion, or type coercion, occurs in JavaScript when the language automatically converts one data type to another. This usually happens when you perform operations involving different types of values.

*/

// ************ String and Number Conversion *********

let str = "10";
let num = 5;

let result1 = str + num;
console.log(result1); // Output: "105"

// *************** Boolean Conversion **********

let truthyValue = "hello";
let falsyValue = "";

if (truthyValue) {
    console.log("Truthy value"); // Output: "Truthy value"
}

if (falsyValue) {
    console.log("Falsy value");
} else {
    console.log("Falsy value"); // Output: "Falsy value"
}


// ************* Automatic Type Conversion in Arithmetic Operations************

let number = 10;
let string = "5";

let result2 = number - string;
console.log(result2); // Output: 5

// ************** Conversion in Comparisons **********

let num1 = 10;
let str1 = "10";

console.log(num1 == str1); // Output: true
console.log(num1 === str1); // Output: false


//*****************Boolean Conversion with == and === **************

let value1 = "0";
let value2 = 0;

console.log(value1 == value2); // Output: true (type coercion converts "0" to 0)
console.log(value1 === value2); // Output: false (different types: string vs number)

