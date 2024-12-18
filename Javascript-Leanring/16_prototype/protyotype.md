# Prototype
JavaScript is an object-based language based on prototypes. This means that whenever we create a function, JavaScript adds an internal property inside the function which is also known as Prototype Object. This means we can attach methods and properties which enables all other objects to inherit these methods and properties as well.

## Rules for writing the prototype
1. Prototype can be applied only on constructor function
2. Add Methods to the Prototype
3. Do Not Overwrite the Prototype Object. Avoid overwriting the prototype object directly, as it can lead to unexpected behavior. Instead, add properties to it.
4. Use this Keyword Correctly
Ensure that you use the this keyword inside prototype methods to refer to the instance on which the method is called.
5. Instantiate Objects Using new Keyword
When using constructor functions or classes, always instantiate objects using the new keyword.

