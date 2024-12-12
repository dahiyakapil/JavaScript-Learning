/*
    What is a higher order function

    A higher order function is a function that takes another function as a argument and returns from it and exexutes the results.
    
*/
const arr = [1, 2, 3];

function add(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

function sub(x, y) {
  return x - y;
}

function calculate(a, b, logic) {
  return logic(a, b);
}

// Correct usage: Call add directly with the array spread
const sum = add(...arr);
console.log("Sum:", sum); // Output: Sum: 6

// Example with `calculate` for two numbers
const result = calculate(10, 5, sub); // Using the `sub` function
console.log("Subtraction Result:", result); // Output: Subtraction Result: 5
