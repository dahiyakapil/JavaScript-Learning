let user = {
  name: "Kapil",
  age: 22,

  sayHello() {
    console.log(this.name);
  },
};

console.log(user.sayHello());

// function fn(name, sex , city) {
//     this.name = name;
//     this.sex = sex;
//     this.city = city;
// }

// const user = fn("Rk", "male", "HP");
// console.log(user);

const object = {
  who: "World",

  greet() {
    return `Hello, ${this.who}!`;  // normal function this work refers to the object
  },

  farewell() {
    return `Goodbye, ${this.who}!`; // refers to the global object fat arrow function this doesn't work
  },
};

console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?




