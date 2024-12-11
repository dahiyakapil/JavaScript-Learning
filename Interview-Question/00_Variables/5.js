/*
    How to verify if a variable is an array?

    There are multiple methods:
    1. Using Array.isArray() --> it will return true or false
    2. Using (arr instanceof Array)
    3. Using (arr.contructor === Array)
*/

const arr = [1, 2, 3, 4, 5];
const checkingArr = Array.isArray(arr); // it will return true or false
console.log(checkingArr);

console.log(arr instanceof Array);
console.log(arr.constructor === Array);
