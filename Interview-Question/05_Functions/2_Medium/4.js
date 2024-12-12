/*

    What are compose and pipe function

    Compose Function
    The compose function executes functions right-to-left. It takes multiple functions as arguments and returns a new function. The rightmost function is executed first, and the output of one function is passed as the input to the next.

    Pipe Function
    The pipe function executes functions left-to-right. It's the opposite of compose, where the leftmost function is executed first.
    In pipe function we just have to change the order of execution we have to use reduce function that executes from left to right
*/

const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy10 = (x) => x * 10;

const RTLCompose = multiplyBy10(subtract1(add2(5))); // Not much readable, if we have many function then it will be ugly and hard to write
console.log("RTLCompose: ", RTLCompose);

const LTRPipe = add2(subtract1(multiplyBy10(5)));
console.log("LTR: ", LTRPipe);

// Let's create a compose function

const compose = function (...fns) {
  return function (intialValue) {
    return fns.reduceRight((prev, fn) => fn(prev), intialValue); // fn(5), prev has initial value [in compose function]
  };
};

const pipe = function (...fns) {
  return function (intialValue) {
    // return fns.reduceRight((prev, fn) => fn(prev), intialValue); // fn(5), prev has initial value [in compose function]
    return fns.reduce((prev, fn) => fn(prev), intialValue); // [in pipe function the order of execution is from left to right]
  };
};

// const newRes = compose(multiplyBy10, subtract1, add2)(5); // here 5 is the initial value passed as an argument
const composeResult = compose(multiplyBy10, subtract1, add2)(5);
const pipeResult = pipe(multiplyBy10, subtract1, add2)(5);
console.log("Compose Result: ", composeResult);
console.log("Pipe Result: ", pipeResult);


