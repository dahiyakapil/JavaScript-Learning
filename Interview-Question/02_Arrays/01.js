/*
    What is the purpose of the array slice method

    The purpose of array slice method is that it select the array elements from start index till the given end index. And it omits the element at the end index. And if we don't pass the second argument in slice method it will go to the end index and will select all the elements.
    
    Note: Slice method doesn't modify the original array but it returns the subset as a new array.

*/

// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(0, 3); // start index = 0 and end index = 3
// console.log(result); // [1, 2, 3]
// console.log(arr); // [1, 2, 3, 4, 5] Original Array


const arr = [0, 1, 2, 3, 4, 5];

const filteredArr = arr.filter((num) => {
    if (num <= 2) {
        return num; // Returns 0, 1, or 2 for truthy evaluation
    }
});

console.log(filteredArr);
