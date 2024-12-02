/*

    How do you determine if an object is sealed or not


    The Object.isSealed() method is used to determine if an object is sealed or not. An object is sealed if all of the below conditions hold true
    If it is not extensible.
    If all of its properties are non-configurable.
    If it is not removable (but not necessarily non-writable). 

    Object.seal(obj) makes the object non-extensible and prevents deletion of properties, but it allows modification of the values of existing properties.
*/

const obj = {
    name: "Kapil",
    age: 22
}

Object.seal(obj);

console.log(Object.isSealed(obj))