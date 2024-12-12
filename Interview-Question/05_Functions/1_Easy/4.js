/*
    What are the function parameter rules

    Rules are as follows:
    1. We can pass multiple paramters. JavaScript does not enforce the number of arguments passed to a function.
    You can call a function with fewer or more arguments than the number of declared parameters.
    2. We can pass the Default Paramters. You can assign default values to parameters, which will be used if no value or undefined is provided for that parameter.
    3. We can pass the Rest Parameters: You can use the rest operator (...) to collect all remaining arguments into an array. Rest parameters must be the last parameter.
    4.Order of Parameters should be in correct order.
    Rest  paramters should be the last paramters passed to the function.
    5. We can use Destructuring in Parameters.
*/

// 1. Number of Parameters:
function greeting(name, age) {
  console.log(`Hey ${name}, you are ${age} years old`);
}
greeting("Kapil");
greeting("Kapil", 20);

// 2. Default Parameters:
function sayHello(name = "Kapil") {
  console.log(`hey ${name}`);
}
sayHello();
sayHello("James");

function sum(...numbers) {
  return numbers.reduce((total, sum) => total + sum, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// 4. Order of Parameters should be in correct order
function orderItem(item, quantity = 1, ...options) {
    console.log(`Ordered ${quantity} ${item}'s with options: ${options.join(", ")}`);
}

orderItem("Pizza", 2, "Extra cheese", "Large size", "with extra mayo");


// 5. Destructuring in Parameters:

// Array Destructuring in Paramters
function display([first, second]) {
    console.log(`First: ${first}, Second: ${second}`)
}
display([1, 2])

// Object Destructuring in Paramters
function person({name, age}) {
    console.log(`Name: ${name}, age: ${age}`)
}

person({name:"Kapil", age: 20});