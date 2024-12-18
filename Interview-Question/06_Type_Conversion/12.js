/*
    What value returns when you attempt a numeric conversion of true and false?

    In JavaScript, when converting true to a number, the return value is 1. When converting false to a number, the return value is 0.
*/

let value = Number(true);
let value2 = Number(false);
console.log(value);
console.log(value2);

let num = 10 + true; // 10 + 1, true is implicitly converted to 1.
let num2 = 10 + false; // 10 + 0, false is implicitly converted to 0
console.log(num);
console.log(num2);
