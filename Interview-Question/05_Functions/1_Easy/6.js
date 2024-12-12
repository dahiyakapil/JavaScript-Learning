/*
    What is the purpose of compareFunction while sorting arrays

    The compareFunction in JavaScript's Array.prototype.sort() method is used to define a custom sorting order for an array. Without a compareFunction, the sort method converts elements to strings and compares them in lexicographical order by default, which may not yield the desired result for numbers or complex objects.

*/

const arr = [10, 5, 20, 3];
arr.sort();
console.log(arr); // sorting will be in lexographical order

// SOrting Numbers
const arr2 = [100, 334, 12, 78, 99, 200, 109];
arr2.sort((a, b) => a - b);
// console.log(arr2) // Sorting in ascending order
arr2.sort((a, b) => b - a);
console.log(arr2); // Sorting in ascending order

// Sorting String
const users = ["Kapil", "James", "Rock", "Dave", "abc"];
users.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(users);



// Sorting Objects by a Property
const employees = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
employees.sort((a, b) => a.age - b.age);
console.log(employees);
