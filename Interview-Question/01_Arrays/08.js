//What happens with negating an array

console.log(![]); // as array is truthy value and negating is falsy value so the result will be falsy value.
console.log(-[42]);
console.log(![42])
console.log(![23, 21, 99])
console.log(-[33, 999, 100]) // Nan 

/*
    What is heppening here that the JavaScript tries to coerce the value into cstring but failes to convert it into number so it returns NaN

*/