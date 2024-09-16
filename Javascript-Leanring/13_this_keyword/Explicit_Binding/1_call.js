/*
    .call() is a method available on functions that allows you to invoke the function with a specific this context and arguments. It enables more explicit control over what this refers to within the function.

    Syntax: -->
    functionName.call(thisArg, arg1, arg2, ...);
*/


function setUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser('Kapil', 'kapd@gmail.com', 123)

console.log(user);

console.log("------------------------------")

function User(name, age, city) {
    this.name = name
    this.age = age
    this.city = city
}

const user2 = new User("XYZ", 23, "LLLL"); // new ---> object 
console.log(user2.name); 
console.log(user2.age); 
console.log(user2.city); 


// This will automatically invoked 
(function IIFE(){
    console.log("this is IIFE")
})()

// DOM Virtual DOM




