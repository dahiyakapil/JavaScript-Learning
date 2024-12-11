/*
    How do you prevent an object to extend
    
    The Object.preventExtensions() method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object.
*/

const obj = {};
Object.preventExtensions(obj);

try {
  Object.defineProperty(obj, "name", {
    value: "kapil",
    writable: true,
    enumerable: true,
    configurable: true,
  });
} catch (error) {
  console.log(error);
  // console.log(error.name) // TypeError: Cannot define property name, object is not extensible
  // console.log(error.message)
  // console.log(error.stack)
}
