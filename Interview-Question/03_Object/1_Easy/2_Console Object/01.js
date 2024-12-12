/*
    What are the placeholders from console object

    Summary of Common Placeholders:
    %s: String
    %d / %i: Integer
    %f: Floating-point number
    %o: Object (expandable in the console)
    %c: CSS styling
    %j: JSON string
    %o (in Inspectable context): Object for inspection in dev tools
*/

const obj = {
    name: "kapil",
    age: 22
}

console.log("Inspect this object: %o", obj)


const name = "Alice";
const age = 25;
const height = 5.7; // in feet
const profile = { name: "Alice", age: 25, height: 5.7 };
const style = "color: red; font-weight: bold;";
const jsonData = JSON.stringify(profile);

// Using placeholders

// %s: String
console.log("Name: %s", name);

// %d / %i: Integer
console.log("Age: %d years", age);

// %f: Floating-point number
console.log("Height: %f feet", height);

// %o: Object (expandable in the console)
console.log("Profile object: %o", profile);

// %c: CSS styling
console.log("%cStyled text: This text is bold and red!", style);

// %j: JSON string
console.log("JSON representation: %j", profile);

// %o (Inspectable context)
console.log("Inspectable profile:", profile);

