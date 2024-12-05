/*
    What is a higher order function

    A higher order function is a function that takes another function as a argument and execute the results.
    
*/

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

const res = calculate(1, 2, add);
console.log(res);
