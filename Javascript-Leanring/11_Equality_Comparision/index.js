/*
    ==
    ===
    object.is


*/

// ********* use of == ***********
let num1 = 10;
let num2 = 10;

if (num1 == num2) {
    console.log('Equal')
}
else {
    console.log('Not Equal');
}

// ********* use of === ***********

let x = 23;
let y = "10";
if (x === y) {
    console.log("X and Y are equals")
}
else {
    console.log("X and Y are not equal")
}

// ********* use of object.is ***********

// case 1
let val1 = 10;
let val2 = 10;

let res = Object.is(val1, val2);
console.log(res);

// case 2
let value1 = 5;
let value2 = "5";
let result = Object.is(value1, value2);
console.log(result);