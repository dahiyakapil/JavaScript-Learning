/*      
    How do you get unique values of an array

    There are multiple ways with the help of we can find the unique elements from the array.
    1. Using set and spread operator
        Set: A Set in JavaScript is a collection of unique values. When an array is passed into a Set, it automatically removes any duplicate elements.
        new Set(arr) creates a Set from the array arr. The result is a Set containing only the unique elements from arr.
        [...new Set(arr)]: The spread operator (...) is used to convert the Set back into an array. This is necessary because the Set object does not have all the array methods (like .map() or .filter()).
        uniqueArray now holds an array with only the unique elements of arr.

*/

const arr = [1, 2, 3, 3, 3, 5, 4, 4, 5, 5, 6, 7, 6];
const uniqueArray = Set(arr);
console.log(uniqueArray);
console.log(arr);
