// // Define a function to calculate the birth year based on the age
// function getAgeYear() {
//     return new Date().getFullYear() - this.age; // Calculate the birth year
// }

// // Define a function to create user objects
// function createUsers(firstName, lastName, age) {
//     const user = {
//         firstName, // Assign first name
//         lastName, // Assign last name
//         age, // Assign age
//         getAgeYear // Assign the method to calculate birth year
//     };
//     return user; // Return the created user object
// }

// // Create user objects
// const user1 = createUsers("Adfar", "Rasheed", 27);
// const user2 = createUsers("Rohit", "Kumar", 22);

// // Output the calculated birth years
// console.log(user1.getAgeYear()); // Outputs the birth year for user1
// console.log(user2.getAgeYear()); // Outputs the birth year for user2


// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = createUser("tea", 250)

// chai.printMe()



function getValue() { // window or this
    console.log(x) // undefined
}

let x = 10; // value initialized .... not a gloabl scope variable script scope
/**
 

 
 * 
 */
getValue();


