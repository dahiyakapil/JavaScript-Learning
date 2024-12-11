//What happens if we add two arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1 + arr2);

/*
    Adding two arrays in JavaScript (+) involves type coercion because the + operator is designed for addition and string concatenation. Here's what happens step by step:

    Coercion Process
    Arrays are coerced into strings: When the + operator is applied, JavaScript tries to convert both operands into primitives. For arrays, this means invoking their .toString() method, which joins the array elements into a comma-separated string.
    Strings are concatenated: If at least one operand is a string (after coercion), the + operator performs string concatenation.


    Important Notes
    This behavior can be surprising if you're expecting numerical addition or a different kind of array operation.
    If you want to combine arrays numerically or merge them, use other methods like concat() or the spread operator (...).
*/

// using concat() method
console.log("Addition of arrays using concat()---> ", arr1.concat(arr2));
console.log("Orignal Arrays", arr1 , arr2)

//using spread opearator
console.log("Addition of arrays using spread operator ---> ",...arr1, ...arr2);
console.log("Orignal Arrays", arr1 , arr2)

