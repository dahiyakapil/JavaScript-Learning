/*

    for of      -----> not used with object
    for in      -----> used with object
    for each    ----->

    for of iteration 
     -> over array
     -> over string
     -> over maps
     -> over object : not iterable with for of loop
    
     Note: for of loop does not work with objects cause objects are not iterable

*/


// *********** for of over array*********
const arr = [1, 2, 3, 4, 5];

for(let item of arr) {
    item += 1;
    console.log(item)
}

// *********** for of over string*********
const str = "Hey there!"
for(const st of str){
    console.log(st)
}

// *********** for of over map*********

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('Fr', "France")


console.log(map)

for(const val of map) {
    console.log(val)
}

// printing separate key and value
for(const [key, value] of map) {
    console.log(key, ':', value)
}

// *********** for of over object (does not work with objects) *********

// Not iterable using for of
const obj = {
    username: 'Kapil',
    age: 22,
    city: 'Panipat'
}

for(const val of obj) {
    console.log(val)
}


