/*
    How do you reverse an array without modifying original array?

    1. Using slice and reverse
    2. Using spread... and reverse

*/

const arr = [1, 2, 3, 4, 5]
const reversedArray = arr.slice().reverse()
console.log(reversedArray)
console.log(arr)

const arr2 = [100, 200, 300, 400, 500];
const revArray = [...arr2].reverse();
console.log(revArray);
console.log(arr2)