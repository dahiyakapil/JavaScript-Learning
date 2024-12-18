/*
    How do you flattening multi dimensional arrays  

    1. Using flat method
    2. Using spread... operator
*/

// Bi-Dimensional Array
const arr = [1, [2, 3], 4, 5, [6, 7]];
const flatArray = arr.flat();
// console.log(flatArray);

const spreadFlatArray = [].concat(...arr);
// console.log(spreadFlatArray)

// Multi dimensional Array
const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const oneStepFlat = multiDimensionalArr.flat(1);
const twoStepFlat = multiDimensionalArr.flat(2);
const fullyFlat = multiDimensionalArr.flat(Infinity);

console.log(oneStepFlat)
console.log(twoStepFlat)
console.log(fullyFlat)
