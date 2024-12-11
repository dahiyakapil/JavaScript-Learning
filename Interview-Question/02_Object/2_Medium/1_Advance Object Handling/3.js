/*

    How do you define multiple properties on an object
    
    Using Object.defineProperty() method we can define multiple properties
    
*/

const obj = {};

Object.defineProperty(obj, "firstName", {
  value: "Kapil",
  writable: true,
  enumerable: true,
  configurable: true, // Allow redefinition or deletion if needed
});

Object.defineProperty(obj, "lastName", {
  value: "Dahiya",
  writable: true,
  enumerable: true,
  configurable: true, // Allow redefinition or deletion if needed
});

console.log(obj); // { firstName: 'Kapil', lastName: 'Sharma' }
