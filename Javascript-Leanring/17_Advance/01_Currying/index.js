


// With Bind method
let multiply = function(x, y) {
    console.log(x * y);
}

// Ways of passing arguments
// let ans = multiply.bind(this, 2, 2)
// let ans = multiply.bind(this, 2)
let ans = multiply.bind(this)

console.log(this)
console.log(ans);
ans(5, 2);


// With closure

let multiplyy = function(x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo = multiplyy(2)
multiplyByTwo(10);

let multiplyByThree = multiplyy(3)
multiplyByThree(10);

let multiplyByFour = multiplyy(4)
multiplyByFour(10);


