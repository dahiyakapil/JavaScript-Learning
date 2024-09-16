// Data types : let, var , const

let a = 1
var b = 2
const c = 3

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))

// // var is funtion scoped
// var globalScoped = "This is global scoped var"

// function funScopedVar() {
//     var funScope = "This is function scoped var"

//     if(true) {
//        var insideFunction = "This is still inside function"
//        console.log(insideFunction);
//     }
//     console.log(insideFunction)
// }

// // but when we try to access outside the function it will throw an error
// funScopedVar();

// console.log(funScope);

// console.log(globalScoped);



// var helps in hoisitng
console.log(value) // undefined
var value = 5;
console.log(value); // 5

//var helps in redeclaration
var x = 10
var x = 20
console.log(x)

//-------------------let variable------------------------

// let variable 
let valueOfNumber = 23
console.log(valueOfNumber)

// hoisting is not available in let temporal dead zone
console.log(m);
let m = 10
console.log(m)


// re declaration is not allowed in let
// let n = 10
// let n = 20


// Hositing

