/*

    What are the different ways to create sparse arrays?

    We can create the sparse array in different ways
    1. Using Array literal
    2. Using Araay constructor
    3. Using Delete operator
    4. Increase length property
    
*/

const arr1 = [1, 2, , 3];
console.log(arr1);


const arr2 = Array(5);
console.log(arr2);

const arr3 = [5, 6, 7];
delete arr3[2]
console.log(arr3)

const arr4 = [20, 30];
arr4.length = 5;
console.log(arr4);