/*
  How do you copy properties from one object to other
    
  Using Object.assign(target, source)
  In this Object.assign method we can copy the values from one object to another.
  Note: It overrides the value if found same: like 
  if we pass age:22 in source as age:33 then the age 33 will overrirde

*/

const target = {name: "Kapil", age: 22};
const source = {gender: "Male"} // if we pass second property let's say age: 25 then age=25 will override the property of the target.

const returnCopiedObject = Object.assign(target, source);
console.log(target);
console.log(source);
console.log(returnCopiedObject);
const newObj = Object.assign(target, source);
console.log(newObj)