/*
    What is the purpose of dir method of console object

    The console.dir() method is used to display an interactive list of the properties of a specified JavaScript object. Unlike console.log(), which outputs the object in a more generic way, console.dir() provides a more detailed and interactive representation of the object, especially useful for inspecting objects with a deep or complex structure.
*/


const person = {
    name: "Kapil",
    age: 22,
};


console.dir(person);


const user = {
    name: "Alice",
    age: 25,
    contact: {
      email: "alice@example.com",
      phone: "123-456-7890"
    },
    hobbies: ["reading", "traveling", "coding"],
    active: true
  };
  
  // Use console.log to display the object
  console.log("Using console.log:");
  console.log(user);
  
  // Use console.dir to inspect the object
  console.log("\nUsing console.dir:");
  console.dir(user);
    