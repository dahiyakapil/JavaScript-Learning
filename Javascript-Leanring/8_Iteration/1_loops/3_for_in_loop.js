
/*

    for of      -----> not used with object
    for in      -----> used with object
    for each    ----->

    for in iteration 
     -> over array
     -> over string
     -> over maps
     -> over object : iterable with object for in loop
    
     Note: for of loop does not work with objects cause objects are not iterable

*/

// *********** for in over array*********
const arr = [1, 2, 3, 4, 5]
for(const val in arr) {
    // console.log(val)
}

// *********** for in over string*********
const str = "Hey There!";
for (const char of str) {
    // console.log(char);
}


// *********** for in over map*********

/*

    Note: 
    The for...in loop is used for iterating over enumerable properties of an object, but Map in JavaScript doesn't have enumerable properties in the same way that plain objects do

*/

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

const obj = {
    username: 'Kapil',
    age: 22,
    city: 'Panipat'
}

// console.log(obj)

for(const val in obj) {
    console.log(val)
}

for(const key in obj) {
    console.log(`${key} : ${obj[key]}`)
}