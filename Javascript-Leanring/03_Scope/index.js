// before 2015 only there were golbal scope and function scope but after ES6 let and const block scope introduced 

// ---------------------Block scoped---------------------------
{
    let a = 2
    console.log(a);
}

// console.log(a) // a is not defined



// ---------------------function scoped---------------------------

function fun () {
    let b = 10
    console.log(b);
}

// calling function
fun()


// ---------------------global scoped---------------------------

let c = 20

function fun () {
    let b = 10
    console.log(b);
}

// global scope variable can be accessed from everywhere in program
console.log(c)

// calling function
fun()

// ******************************

// use of ===

let a = 30
let b = '40'
console.log(typeof(a)) // number
console.log(typeof(b)) // string


// condition to check the relation between a and b
if(a === b) {
    console.log('a equals to b and the data types are also equals')
}
else {
    console.log('a not equals to b and the data types are not equals')
}


// operators
// conversion
// objects
// 

