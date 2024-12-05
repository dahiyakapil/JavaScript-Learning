
/*
    What is JSON and its common operations

    JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is used to store and exchange data, especially between a client and a server. JSON is easy to read and write for humans and straightforward for machines to parse and generate. JSON consists of key-value pairs.

   - Features of JSON:
    1. Lightweight: Compact and minimal syntax.
    2. Language Independent: Based on JavaScript syntax but supported by most      programming languages.
    3. Easy to Parse: Widely used in APIs for data exchange.

   - Structure of JSON:
    JSON consists of key-value pairs:

    Keys must be strings (enclosed in double quotes).
    Values can be:
    Strings
    Numbers
    Objects
    Arrays
    Booleans (true or false)
    null

   - Common JSON Operations:
   1. Convert JavaScript Object to JSON (Stringify): Use JSON.stringify() to convert a JavaScript object or array into a JSON string.
   2. Parse JSON to JavaScript Object: Use JSON.parse() to convert a JSON string back into a JavaScript object.

   - Use Cases of JSON:
    Web APIs: Sending and receiving data between clients and servers.
    Configuration Files: Used in tools like package.json or tsconfig.json.
    Data Storage: Saving structured data in databases or files.
    Cross-Language Interoperability: Sharing data between systems built with different programming languages.

   - Limitations of JSON:
    No Functions or Methods: JSON cannot store functions or methods.
    No Comments: JSON doesn’t support comments for documentation.
    No Undefined: undefined values are ignored in JSON.stringify().

*/

// Converting JS object to JSON String
const obj = {
    name: "Kapil",
    age: 22
}

const json = JSON.stringify(obj)
console.log(json)

// Converting JSON String to JS Object
const jsonString = `{"name" : "James", "age": 30}`
const obj2 = JSON.parse(jsonString);
console.log(obj2)
console.log(obj2.name)