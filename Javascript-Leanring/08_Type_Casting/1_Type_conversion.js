/*
    Converting Strings to Numbers
     -> using parseInt()
     -> using Number()


    Converting Numbers to Strings
     -> using String()
     -> using toString()



 */


// ********** Converting Strings to Numbers *************

let str = "123"
str = parseInt(str);
console.log(typeof(str))

// sum of string and number
let str2 = '123';
let num = 12;


str2 = parseInt(str2);

let sum = str2 + num;
console.log(sum);

// ********** Converting Numbers to String *************

// using String()
let number1 = 150;
number1 = String(number1);
console.log(typeof(number1))

// using toString()
let number2 = 160;
number2 = toString(number2);
console.log(typeof(number2))



