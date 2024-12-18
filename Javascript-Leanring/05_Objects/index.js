/*

  Objects: literal, singleton(using constructor)

  
  ..... For accessing
    There are two ways to accessing the objects
            -> using dot 
            -> using square brackets []
                Note: Square Bracets will be used only when we enter key in object
                      like this : "Full name" 
                      or when we have to access the symbol data type then we have to
                      use square brackets

  Work to do in objects: 
    -> Declaration
    -> symbol 
    -> arrays in objets
    -> function in objects (using this keyword)
    -> not permit anyone to update the object (using freeze)
    -> Object.assign() method is used for copy the values 
    -> Object.entries() method returns an array of a given object


  for adding or updating the value of object's variable we can update outside of the object context using dot operator
    -> objectName.key = "value"
*/



// declaration of objects
const user = {} // literal
const user1 = new Object() // singleton using contructor

const mySymbolDataType = Symbol("key1")

const employee = {
  fullname :{
    username: {
      firstName: "Kapil",
      lastName: "Dahiya"
    }
  },
  city: "Panipat",
  email: "kaps@gmail.com",
  age: 21,
  "location of residence": "Delhi",
  [mySymbolDataType]: "mySymbol1",
  myArray: ["Value1", "Value2"]
}

console.log(employee.fullname.username.firstName);
console.log(employee.city)

/*
  To ptint this : "location of residence": "Delhi",
  cannot print easily with the dot opearator have to use square brackets [""]

*/  
console.log(employee["location of residence"])

/*
  To ptint the symbol firstly has to declare a symbol variable outside of the ibject context then write inside the object
  cannot print easily with the dot opearator have to use square brackets [""]
*/  

console.log(employee[mySymbolDataType])

console.log(employee.myArray)

// for adding new key value pair inside object
employee.salary = 1230000;

console.log(employee);


// ********************* object as a function *********************************

employee.greeting = function () {
  console.log(`Hello, ${this.fullname.username.firstName}`) 
}

console.log(employee.greeting());

Object.freeze(employee);

employee.status = "active";

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj4 = { d: 5 };

// Combining obj1, obj2, and obj4 into obj3
const obj3 = Object.assign({}, obj1, obj2, obj4);

console.log(obj3); 

// for getting the keys of the object
console.log(Object.keys(employee));

// for getting the values of the object
console.log(Object.values(employee));

console.log(Object.entries(employee));


// object destructing
  
const {age, city} = employee
console.log(age);
console.log(city);








// question
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }
  
//   console.log(sum); // 390