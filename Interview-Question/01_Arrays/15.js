/*  

    How do you create an array with some data

    Using
    Array Literal	  -------->   Quick and simple initialization.
    Array Constructor	  -------->   Fixed-length or pre-filled arrays.
    Array.of()	  -------->   Creating arrays from arguments explicitly.
    Array.from()	  -------->   Array-like objects or iterable transformations.
    Spread Operator	  -------->   Copying or combining arrays.
    Loops	  -------->   Dynamically generating arrays.

*/

const arr1 = [1, 2, 3];
console.log(arr1);

const arr2 = Array(5).fill(0);
console.log(arr2);

const arr3 = Array.of(1, 2, 3, 4, 5)
console.log(arr3)

const arr4 = Array.from("Hello");
console.log(arr4)

const arr5 = [11, 22, 33, 44, 55];
const res = [...arr5, 66, 77];
console.log(res)

const arr6 = [];
for(let i=1; i<5; i++) {
    arr6.push(i)
}

console.log(arr6)