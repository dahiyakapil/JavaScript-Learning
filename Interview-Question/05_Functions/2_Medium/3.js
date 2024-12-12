/*
    What is Pure Function

    A pure function is a function in which the function return the same output accordin to the paramters passed to it.
    It does not have side effects means it does not change the anything outside it just change and return the output according to the parameters.

    Key Points:
    1. Pure function has no side effects:
        The function does not modify any external variables, states, or data outside its scope.
        It does not produce side effects like changing global variables
    2. Given the same inputs, the function always produces the same output.
    3. Immutability: Does not alter external data.
*/

const array = [1, 2, 3];

function addElementsToArray(a, element) {
  // array.push(element) it causing side effects and mutating the array

  return [...a, element]; // creating a new array and will not mutate or change the original array
}
console.log(addElementsToArray(array, 4));
console.log(array);

// pure function
function add(a, b) {
    return a + b;
}

console.log(add(2, 3))
