/*
    How to verify if a variable is an array?    

    1. Using Array.isArray()
    2. Using instanceof opearator
    3. Checking constructor type

*/

const arr = [1, 2, 3]
const res = Array.isArray(arr);
console.log(res);

const arr2 = [4, 5, 6];
const result = arr2 instanceof Array
console.log(result)

const arr3 = ["Delhi", "Mumbai", "Gurugram"];
console.log(arr3.constructor === Array); 