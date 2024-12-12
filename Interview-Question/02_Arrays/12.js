/*
    How do you map the array values without using map method

    There are multiple ways with the help of we can map the array.
    1. Using for loop
    2. Using for...of loop
    3. Using for each loop

*/

// const arr = [1, 2, 3, 4, 5];
// const resultArray = [];

// for (let i = 0; i < arr.length; i++) {
//   resultArray.push(arr[i]);
// }

// console.log(resultArray);


// const arr = [1, 2, 3, 4, 5];
// const resultArray = [];

// for(const value of arr) {
//     resultArray.push(value)
// }

// console.log(resultArray);


const arr = [1, 2, 3, 4, 5];
const resultArray = [];

arr.forEach(value => {
    resultArray.push(value)
})

console.log(resultArray);
