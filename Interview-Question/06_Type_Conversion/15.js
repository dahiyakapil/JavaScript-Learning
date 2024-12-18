/*
    In the context of Boolean conversion, which values evaluate to false, and which values evaluate to true?

    1. Intuitively empty values, like 0, an empty string, null, undefined, and NaN, become false.
    2. Other values become true.

*/

let value = "";
let value2 = null;
let value3 = 0;
let value4 = NaN;
let value5 = undefined;

let value6 = 123;
let value7 = "abc";
let value8 = "0";

console.log(Boolean(value));
console.log(Boolean(value2));
console.log(Boolean(value3));
console.log(Boolean(value4));
console.log(Boolean(value5));
console.log(Boolean(value6));
console.log(Boolean(value7));
console.log(Boolean(value8));
