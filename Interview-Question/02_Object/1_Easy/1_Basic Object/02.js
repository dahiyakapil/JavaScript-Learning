/*
    How do you check if a key exists in an object?

    1. Using the in operator
    2. Using hasOwnProperty Method
    3. Using Object.hasOwn method
*/

const obj = {
    name: "Kapil",
    age: 22
}

console.log("name" in obj);
console.log(obj.hasOwnProperty("name"));
console.log(Object.hasOwn(obj, "name"));