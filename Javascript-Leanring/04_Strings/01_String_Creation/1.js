/*
    Strings
    Strings are collection of characters stored inside quotes ( double or single) or back tick (in ES6). Strings represents text and can have lower case, upper case, special characters or numbers within quotes.

    Ways of Creating Strings
    1. String Literal Common way
    2. Using String function or String Constructor
    3.


*/

const a = "Kapil";
const b = "Kapil";
const c = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eum dolore accusantium mollitia repellendus vel quibusdam doloremque ipsa, hic dignissimos.`; // ES6 temporal literal

// NOTE: Temporal Literal or backtick is used for when we want to write multiple string cause when we use doubel quotes or single quotes we got an error that we can not write string in another line so that's why we use temporal literals.... Template literals can also add multi-line strings.

// Any function that comes with () are called as function ---> String(), Number()

console.log(a);
console.log(b);
console.log(c);

const str = String(123); // Function, cause it has(), so it behaves like a function
console.log(str);
