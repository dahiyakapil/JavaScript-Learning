/*
Syntax ---> 

        function function_name() {
                // code
            }
    Rules:
    -> If there is simple function no need to write the console.log(function_name)
        simplly write and call function_name()
    -> if there is return statement  inside the function then have to write the 
        console.log(function_name) and call the function

    
    Work to do with functions
    -> Decalaration
    -> simple function
    -> return statement
    -> spread operator (...)
    -> extract array value using function
    -> this
    -> arrow function
    -> IIFE (Immediately invoked function expression)
    


*/

// ************** Simple Function ************
function nameFun() {
  console.log("Kapil");
}
nameFun();

// ************** This code will not run************

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

// ************** return statement ************

function addTwoNumber(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumber(2, 3));

// ************** spread operator(...) ************

function calculatePrice(val1, val2, ...num1){
    return num1
}
console.log(calculatePrice(100, 200, 300, 400, 500))

// ************** function with object ************

const user = {
    username: "Kapil",
    city: "Delhi",
    salary: 2000000,
    age: 22
}

// function handlingObject(props) {
//     console.log(`Username is ${props.username} and salary is ${props.salary}`);
// }

function handleFunctionWithObject({username, city, salary, age}) {
    console.log(`username is: ${username}  and salary is ${salary}`)
}
handleFunctionWithObject(user);
// handlingObject(user);

// ************** extract array value using function ************

const arr = [100, 200, 300, 400, 500];

function returnArrayValue(getArray) {
    return getArray[1]
}
console.log(returnArrayValue(arr))



// ************** this with object ************

const user2 = {
    username: "Rock",
    age: 22,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

user2.welcomeMessage()
user2.username = "Kim"
user2.welcomeMessage()



// ************** arrow function ************

const one = function() {
    let userName = "kapil"
    console.log(this)
}

// one()

const addTwoNumberss = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumberss(2, 3));

// 2nd way of writing arrow function

const addTwo = (num1, num2) => num1 + num2

const addTwos = (num1, num2) => (num1 + num2) 


// ************** IIFE (Immediately invoked function expression) ************

(function iIFE(){
    console.log("Hey this is IIFE");
})();