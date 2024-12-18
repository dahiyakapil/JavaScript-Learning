/*
    What is the Boolean return value for the string “0” in JavaScript?

    The output will true cause the epmty string returns false but non-empty string returns true.
*/

let value1 = Boolean(0);

let value2 = Boolean('0');

console.log(value1); // returns false
console.log(value2); // returns true