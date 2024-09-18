/*
    Functions
    1. Function Statement aka function decleration
    2. Function Expression
    3. Anonmous function
    4. Named Function
    5. Named function Expression
    6. Diff b/w Paramters and arguments
    7. First class function

    
@AmanMishra-pn3cq
2 years ago (edited)
Things learned:
1.  What is Function Statement ?
A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
      For Ex  -  function xyz(){
                            console.log("Function Statement");
                       }

2.  What is Function Expression ?
A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
      For Ex - var a = function(){
                            console.log("Function Expression");
                    } 

3.  What is Anonymous Function ?
A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
      For Ex - function(){
                     }

4.  What is Named Function Expression ?
A.  A function with a name is known as Named Function Expression.
      For Ex - var a = function xyx(){
                            console.log("Names Function Expression");
                     }

5.  Difference b/w Parameters and Arguments ?
A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
A.   The Ability of use function as value,
*     Can be passed as an Argument,
*     Can be executed inside a closured function &
*     Can be taken as return form.
       For Ex - var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } 

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.
*/

// function statement or function declaration
function a () {
    console.log("This is function statement")
}

//function Expression
let exp = function (){
    console.log("This is function expression")
}

// Named function Expression
let fn = function b() {
    console.log("This is named function expression")
}

// Anonomouse Function they are used there we have to have to pass the function as value
// function () {
//     console.log("This is anonomous fucntion")
// }

// Diff b/w parameters and arguments 

function getValue (a, b) { // parameters
    return a + b;
}

 console.log( getValue(1, 2)); // arguments


 /*
    first Class function
    1. Assigning function to a varibale
    2. Passing a function as an argument
    3. Returning function
 
 
 */ 

// 1. Assigning function to a varibale
 let res = function name() {
    console.log("Hey this is first class, assigning function to a varibale")
 }
 res();

// 2. Passing a function as an argument

function sayHello () {
    return "Hello there "
}

function gretting(helloMessage, name){
    console.log(helloMessage() + name)
}

// pass the sayHello as an argument to gretting() function
gretting(sayHello, "JavaScript!")

// 3. Returning function
function hello() {
    return function () {
        console.log("Hello this is returning function !!!")
    }
}
const returnedFunction = hello();
returnedFunction();

