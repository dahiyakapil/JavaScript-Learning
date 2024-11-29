/*      
    How do you get unique values of an array

    There are multiple ways with the help of we can finf the unique elements from the array.
    1. Using set and spread operator

*/

const arr = [1, 2, 3, 3, 3,5, 4, 4, 5, 5, 6, 7, 6];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray);
console.log(arr);