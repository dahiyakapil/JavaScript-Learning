
// 1 way
const obj = {
  name: "kapil",
  age: 21
}

console.log(obj.name);

// 2 using builtin new object constructor
const person = new Object();
person.name = "Alice";
person.age = 25;
console.log(person.name)

// 3 using constructor function
function constFunc(name, age) {
  this.name = name;
  this.age = age;
  
  console.log("The name of person is: "+ name + "and age is: "+ age);
}
const person1 = new Person("James", 25);
