/*
    How do you prevent an object to extend
    
    The Object.preventExtensions() method is used to prevent new properties from ever being added to an object. In other words, it prevents future extensions to the object. Let's see the usage of this property,
*/

const obj = {};
Object.preventExtensions(obj);

try {
    Object.defineProperty(obj, "name", {
        value: "kapil"
    })
} catch (error) {
    console.log(error) // TypeError: Cannot define property name, object is not extensible
} 