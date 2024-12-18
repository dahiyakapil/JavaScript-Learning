/*
    Do boolean conversions happen implicitly, explicitly, or both?

    Both. Boolean conversions in JavaScript can happen implicitly, such as when using boolean contexts (if, while, ? :), and explicitly, using the Boolean() function or the !! operator.
*/

// Implicit Boolean Conversion:

let str = ''; // returns 0... means false value... 
// str is implicitly converted to a boolean true
if (str) { 
    console.log("String is not empty")
} else {
    console.log("String is empty")
}

// Explicit Boolean Conversion: using Boolean() or double not operator !!

let value = 123;
let res = Boolean(value)
console.log(res);
console.log(typeof res)

let num = 10;
let num2 = 0;
num = !!num;
num2 = !!num2;
console.log(num)
console.log(num2)

