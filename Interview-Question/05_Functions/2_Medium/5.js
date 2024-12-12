/*
    What is the difference between map and forEach functions?

    1. Returning values: The map method returns a new array with transformed elements whereas forEach method returns undefined eventhough both of them are doing the same job.

    2. Chaining methods: The map method is chainable. i.e, It can be attached with reduce, filter, sort and other methods as well. Whereas forEach cannot be attached with any other methods because it returns undefined value.

    3. Mutation: The map method doesn't mutate the original array by returning new array. Whereas forEach method also doesn't mutate the original array but it's callback is allowed to mutate the original array.

*/


const array = [1, 2, 3, 4, 5];

const mapResult = array.map(function (val) {
  return val;
});
console.log(mapResult);

const forEachResult = array.forEach(function(val) {
    return val;
}) 

console.log(forEachResult) // Always undefined

const totalMapValue = array.map(x => x).reduce((total, currentVal) => total + currentVal);
console.log(totalMapValue);