/*
    What is a proxy object

    The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. Proxy objects are commonly used to log property accesses, validate, format, or sanitize inputs, and so on.


    The user has access to change the vlaue of the original object and we don't want that the user change the orignal values so we add validation using proxy get and set method.

    So for that we create a new porxy object and we provide this proxy object to the user.
*/

const person = {
  fname: "Kapil",
  lname: "Dahiya",
  age: 20,
};

const personProxy = new Proxy(person, {
  // Accessing the proxyObject key, values
    // get(target, prop) {
    //   // console.log({ target, prop });
    //   // console.log("testing");
    //   if (prop in target) {
    //    // return target[prop]; we don't use this as we are getting the defalut behaviour instead we use Reflect... this works fine too but not professionally
    //    Reflect.get(target, prop)
    //   } else {
    //     return false;
    //   }
    // },

  // Adding validation layer
  set(target, prop, value) {
    if (!(prop in target)) {
      throw new Error(`${prop} does not exist`);
    }
    switch (prop) {
      case "fname":
      case "lname":
        if (typeof value !== "string") {
          throw new Error(`${prop} must be a string`);
        }
        break;
      case "age":
        if (typeof value !== "number") {
          throw new Error(`${prop} must be a number`);
        }
        if (value <= 0) {
          throw new Error(`${prop} must be > zero`);
        }
        break;
    }
    // we are setting default behabiour but we have Reflect instead of setting the default behvaiour ourselves
    // target[prop] = value;

    // This will works fine and will set the defalut behaviour of JS
    Reflect.set(target, prop, value);
  },
});

personProxy.age = 100;
personProxy.fname = "Kapil2";

// console.log(personProxy.fname);
console.log(personProxy)
