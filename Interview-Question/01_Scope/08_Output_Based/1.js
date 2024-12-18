// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// var func = [];
// for (var i = 0; i < 5; i++) {
//   func[i] = function () {
//     console.log(i);
//   };
// }
// func[3]();

// function calculate(operator) {
//     return function (a) {
//       return function (b) {
//         if (operator === '+') {
//           return a + b;
//         } else if (operator === '-') {
//           return a - b;
//         } else if (operator === '*') {
//           return a * b;
//         } else if (operator === '/') {
//           return a / b;
//         } else {
//           throw new Error('Invalid operator');
//         }
//       };
//     };
//   }

//   // Example usage:
//   console.log(calculate('+')(1)(2)); // Output: 3
//   console.log(calculate('*')(2)(3)); // Output: 6
//   console.log(calculate('-')(10)(5)); // Output: 5
//   console.log(calculate('/')(20)(4)); // Output: 5

function createBase(baseNumber) {
  return function (N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  };
}

var addSix = createBase(6);
console.log(addSix(10));
