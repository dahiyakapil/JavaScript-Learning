/*

    How do you empty an array

    1. By using length method, setting length eqault to zero.
    2. Reassign to an Empty Array
    3. Use splice() --> start index=0, and if we do not pass the 2nd parameter then it will select all  the element from the start and delete and all elements from the array.

*/

const arr = [1, 2, 3];
arr.length = 0;
// console.log(arr);

let arr2 = [1, 2, 3, 4];
arr2 = [];
console.log(arr2);

let arr3 = [7, 8, 9];
arr3.splice(0);
console.log(arr3);
