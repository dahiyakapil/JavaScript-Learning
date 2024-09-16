/*
    Explicit type conversion in JavaScript involves manually converting values from one type to another. This is often done using built-in functions or methods

    String Conversion
    -> using String()
    -> using toString()


*/

// ******** 1. String Conversion ***********

// using String()
let num = 123;
let str = String(num);
console.log(str);
console.log(typeof (str));

// using .toString()
let bool = true;
let str1 = bool.toString();
console.log(str1)
console.log(typeof(str1));



// ******** 2. Number Conversion from string ***********

let str3 = "456";
let num3 = Number(str3);
console.log(num3)
console.log(typeof(num3));

let str4 = "123px";
let num4 = parseInt(str4, 10); // 10 here : decimal system(digits 0 - 10)
console.log(num4); // Output: 123
console.log(typeof num4); // Output: "number

let str5 = "3.14abc";
let num5 = parseFloat(str);
console.log(num5); // Output: 3.14
console.log(typeof num5); // Output: "number"


// ******** 3. Boolean Conversion ***********
let num6 = 0;
let bool6 = Boolean(num6);
console.log(bool6); // Output: false
console.log(typeof bool6); // Output: "boolean"



// ******** 5. Object Conversion ***********

// object to string -> using JSON.stringify()
let obj = {
    name: "Kapil",
    age: 22
};
let str7 = JSON.stringify(obj);
console.log(str7)
console.log(typeof(str7));


// string(json file) to object -> using JSOn.parse()


let str8 = '{"name":"Bob","age":30}';
let obj8 = JSON.parse(str8);
console.log(obj8);
console.log(typeof(obj8));


