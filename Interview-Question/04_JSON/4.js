/*
    How do you parse JSON string
    
    When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

*/

const json = `{"name": "Kapil", "age":22}`;
const obj = JSON.parse(json);
console.log(obj)