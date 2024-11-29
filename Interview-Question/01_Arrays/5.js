/*
    What is the purpose of compareFunction while sorting arrays
     
    If we don't use compareFunction then the sort method will not sort the numbers properly. Sort method sort the numbers as string. because it sort accoding to the dictionary pattern.

*/

let arr = [1, 2, 10, 20];
// let sortedArray = arr.sort(); // when we don't use compare function
let sortedArray = arr.sort((a, b) => a-b);
console.log(sortedArray); 

let stringArray = ['Banana', 'apple', 'Cherry'];
let stringSortedArray = stringArray.sort((a, b)=>a.localeCompare(b));
console.log(stringSortedArray);