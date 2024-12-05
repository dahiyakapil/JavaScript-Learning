/*

    What is first class function

    1. Assigning function to a varibale
    2. Passing a function as an argument
    3. Returning function
*/

//  1. Assigning function to a varibale
const variable = function name() {
  console.log("This is a first class function");
};
variable();

//  2. Passing a function as an argument
function sayHello() {
  return "hello ";
}

function greetings(helloMessage, name) {
  console.log(helloMessage() + name);
}
greetings(sayHello, "Kapil");

// 3. Returning function

// function hello() {
//   return function () {
//     console.log("Hello this is returning function !!!");
//   };
// }
// const returnedFunction = hello();
// returnedFunction();



function add (a, b) {
  return a + b;
}
function sub(a, b) {
  return a-b;
}

function calculate(x, y, operation){
  return operation(x, y)
}

console.log(calculate(1,2, add));