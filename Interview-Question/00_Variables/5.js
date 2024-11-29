//How to verify if a variable is an array?

const arr = [1, 2, 3, 4, 5];
const checkingArr = Array.isArray(arr);
console.log(checkingArr);

console.log(arr instanceof Array);
console.log(arr.constructor === Array)