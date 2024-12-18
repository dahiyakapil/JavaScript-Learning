/*
    What built-in object do we use to explicitly convert values to a string?

    The String() object is used
*/

let num = true;
console.log(typeof num);

num = String(num); // Explicitly convert to a string from a boolean
console.log(num);
console.log(typeof num);
