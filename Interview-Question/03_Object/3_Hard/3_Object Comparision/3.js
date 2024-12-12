/*
    What is the purpose of using object is method
    
    Some of the applications of Object's is method are follows,

    It is used for comparison of two strings.
    It is used for comparison of two numbers.
    It is used for comparing the polarity of two numbers.
    It is used for comparison of two objects.

*/

const str1 = 'hello';
const str2 = 'hello';
console.log(Object.is(str1, str2)); // true
console.log(Object.is('world', 'World')); // false

console.log(Object.is(42, 42)); // true
console.log(Object.is(NaN, NaN)); // true (Unlike `===`, which returns false)
console.log(Object.is(+0, -0));  // false (Unlike `===`, which returns true)


console.log(+0 === -0);          // true
console.log(Object.is(+0, -0));  // false


const obj1 = { a: 1 };
const obj2 = { a: 1 };

console.log(Object.is(obj1, obj2)); // false (different references)
console.log(Object.is(obj1, obj1)); // true (same reference)