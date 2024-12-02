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