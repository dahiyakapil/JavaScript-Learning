/*
    How do you determine whether object is frozen or not
    
    Object.isFrozen() method is used to determine if an object is frozen or not.An object is frozen if all of the below conditions hold true,

    If it is not extensible.
    If all of its properties are non-configurable.
    If all its data properties are non-writable. The usage is going to be as follows,

*/


const obj = {
    name: "Kapil",
    age: 22
}

Object.freeze(obj)
console.log(Object.isFrozen(obj))