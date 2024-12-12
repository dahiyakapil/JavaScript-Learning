/*
    What are the different ways to make an object non-extensible

    1. Using Object.preventExtensions
    2. Using Object.seal
    3. Using Object.freeze

*/

const obj = {};
Object.preventExtensions(obj);

try {
    Object.defineProperty(obj, "name", {
        value: "kapil"
    })
} catch (error) {
    console.log(error)
}
// console.log(obj) // TypeError: Cannot define property name, object is not extensible

const obj2 = {};
Object.seal(obj2);
try {
    Object.defineProperty(obj2, "name", {
        value: "kapil"
    })
} catch (error) {
    console.log(error)
}
// console.log(obj2) 


const obj3 = {};
Object.freeze(obj3);
try {
    Object.defineProperty(obj3, "name", {
        value: "kapil"
    })
} catch (error) {
    console.log(error)
}
console.log(obj3) 