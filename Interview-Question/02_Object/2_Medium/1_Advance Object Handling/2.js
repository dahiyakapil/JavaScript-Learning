/*
  How do you copy properties from one object to other
    
  Using Object.assign(target, source)
  In this Object.assign method we can copy the values from one object to another.
  Note: It overrides the value if found same: like 
  if we pass age:22 in source as age:33 then the age 33 will be overwrites

*/

const target = {name: "Kapil", age: 22};
const source = {gender: "Male"}

const returnCopiedObject = Object.assign(target, source);
console.log(target);
console.log(source);
console.log(returnCopiedObject);