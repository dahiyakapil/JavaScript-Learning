/*  
    How do you reversing an array

    There are two ways with the help of we can reverse the array
    1. Using reverse() method
    2. Using sort and compareFunction ---> descending

    Key Points:
    1. It modifies the original array.
    2. It does not create the new array.
 */

// One way using reverse() method
let arr = [1, 2, 3, 4, 5];
let reversedArray = arr.reverse();
console.log(reversedArray);
console.log(arr); // modified array

// Second way using sort and compareFunctionjs
let arr2 = [6, 7, 8, 9, 10];
let sortedReverseArray = arr2.sort((a, b) => b - a);
console.log(sortedReverseArray);