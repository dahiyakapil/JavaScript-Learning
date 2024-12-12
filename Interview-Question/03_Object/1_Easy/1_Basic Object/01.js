/*
    What is an object initializer?

    An object initializer is a way to create and define an object using key-value pairs. Each key is paired with its respective value within curly braces {}. The properties of the object can be accessed using either the dot notation or the bracket notation.

*/

const obj = {
    name : "Kapil",
    age : 22,
    "favorite color": "blue" // Property with spaces
}

console.log("Name: " + obj.name + " & age: " + obj.age);
console.log("Favorite Color is: " + obj["favorite color"]);

