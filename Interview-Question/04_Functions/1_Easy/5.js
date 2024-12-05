/*
    What is the way to find the number of parameters expected by a function
    
    You can use function.length syntax to find the number of parameters expected by a function.
*/

function calculate(a, b, c, d) {
  return a + b + c + d;
}

const res = calculate.length;
console.log(res);
