/*
    How do you find min and max value in an array

    There are various ways with the help of we can find the min and max value in an array

    1. Using spread Operator
    2. Using reduce() method
    3. using for loop
    
*/

// Math.min and Math.max spread operator
let arr = [1, 2, 34, 4, 5];
let minValue = Math.min(...arr);
let maxValue = Math.max(...arr);
// console.log(minValue);
// console.log(maxValue);

// using reduce()
let arr2 = [3, 455, 223, 11];
let min = arr2.reduce(
  (acc, currentValue) => (currentValue < acc ? currentValue : acc),
  Infinity
);
let max = arr2.reduce(
  (acc, currentValue) => (currentValue > acc ? currentValue : acc),
  -Infinity
);
// console.log(min);
// console.log(max);

// Using for loop
let arr3 = [999, 222, 445, 11];

let minVal = arr3[0]; // Initialize with the first element
let maxVal = arr3[0]; // Initialize with the first element

for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] < minVal) { // Use arr3 and minVal
    minVal = arr3[i];
  }
  if (arr3[i] > maxVal) { // Use arr3 and maxVal
    maxVal = arr3[i];
  }
}

console.log("Min Value:", minVal); // Output: Min Value: 11
console.log("Max Value:", maxVal); // Output: Max Value: 999

