/*

    Map---> 

    Steps
    1. Create a second blank array from first array
    2. return keyword put the elements in that newly created array.

*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.map((item) => {
  return item + 1;
});
console.log(result);


let arr = [1, 2, 3, 4];

// ******************
let res = arr.map(function(val){
    return val + 1;
});

console.log(res);