/*

    What are the possible ways to create objects in JavaScript

    1. Using object literal
    2. Using Object constructor
    3. Using Object.create() method
    4. Using Function constructor
    5. Using Object's assign method:
*/

//-----------------------------------------------------------------
//  1. Using object literal
const obj = {
  name: "Kapil1",
  age: 1,
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj))
console.log(obj);

//------------------------------------------------------------------

// 2. Using Object constructor
const obj2 = {
  name: "kapil2",
  age: 2,
};
const newObj = new Object(obj2);
console.log(newObj);

//------------------------------------------------------------------

//  3. Using Object.create() method
let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

let carProps = {
  type: {
    value: "Volkswagen",
    enumerable: true, // Make property enumerable
    writable: true, // Allow modification if needed
    configurable: true, // Allow redefinition or deletion if needed
  },
  model: {
    value: "Golf",
    enumerable: true, // Make property enumerable
    writable: true,
    configurable: true,
  },
};

var car = Object.create(vehicle, carProps);

console.log(car); // { type: 'Volkswagen', model: 'Golf' }
console.log(car.wheels); // '4'

//------------------------------------------------------------------

// 4. Using Function constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj4 = new Person("Kapil4", 4);
console.log(obj4);

//------------------------------------------------------------------

//  5. Using Object's assign method:

const target = {
  name: "kapil5",
  age: 5,
};

const source = {
  gender: "Male",
};

const returnNewObject = Object.assign({}, target, source);
console.log(returnNewObject);
console.log(target)
console.log(source)
