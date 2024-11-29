/*

    How do you remove falsy values from an array

    We can remove all the falsy values from the array using filter method and passing Boolean as parameter.
*/


const arr = [1, "", 0, NaN, undefined, 2, null, 3];
const filteredArr = arr.filter(Boolean);
console.log(filteredArr);
