/*  
    What is the easiest way to convert an array to an object  
    
    1. Using spread... operator
    2. Using object.Assign
    3. Using for loop
*/


// Using spread... operator
var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject);  

// Using Object.Assign()
 const arr = ["Kapil", "James", "Rock"];
 const resultObject = Object.assign({}, arr);
 console.log(resultObject);



// Using for loop
const arr2 = ["a", "b", "c"];
const res = {};
for(let i =0; i<arr2.length; i++) {
    res[i] = arr[i]
}
console.log(res);
console.log(arr2) // original array

