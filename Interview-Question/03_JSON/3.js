/*
    What is the purpose JSON stringify
    
    When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.
*/

const obj = {
    name: "Kapil",
    age: 20
}

const json = JSON.stringify(obj);
console.log(json)