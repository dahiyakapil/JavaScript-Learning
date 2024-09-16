/*
    .bind(): This method returns a new function that, when invoked, has its this context set to a specified value, with a given sequence of arguments preceding any further arguments when the new function is invoked.

    Syntax --->
        let boundFunction = functionName.bind(thisArg, arg1, arg2, ...);

    Work to do with bind:
    -> Basic use of bind
    -> 

*/

let person = {
    name: "Kapil"
};

function greet() {
    console.log("Hello, " + this.name)
}

let greetPerson = greet.bind(person);
greetPerson();