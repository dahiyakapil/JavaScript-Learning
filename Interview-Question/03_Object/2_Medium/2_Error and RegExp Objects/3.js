/*
    What is a RegExp object    

    The RegExp object in JavaScript represents regular expressions, which are patterns used to match sequences of characters within strings. Regular expressions are powerful tools for searching, extracting, and replacing text based on patterns. 

*/

const regex = /world/;
console.log("hello world".match(regex)); // ['world']
console.log("hello world".replace(regex, "JavaScript")); // "hello JavaScript"
console.log("hello world".search(regex)); // 6
console.log("apple, banana, cherry".split(/, /)); // ['apple', 'banana', 'cherry']

const regex2 = /cat|dog/; // Matches "cat" or "dog"
console.log(regex2.test("I have a cat.")); // true
console.log(regex2.test("I have a fish.")); // false

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("example@mail.com")); // true
console.log(emailRegex.test("invalid-email"));    // false
