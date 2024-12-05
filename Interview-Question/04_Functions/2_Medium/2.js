/*
    What is callback function

    A callback function is a function passed as an argument to another function. 
*/

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

const addtion = calculate(1, 2, add);
const subtraction = calculate(5, 4, sub);
console.log(addtion);
console.log(subtraction);
