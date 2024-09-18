# Function

## 1. Function Statement or Function Declaration
    Function Statement or function declaration is just a normal function in which just give a naming convention to the function. With the help of this function statement we can perform hoisting. It means we can call the function without it's declaration


    abc() // hoisting to the top before declaration

    function abc () {
        console.log("This is function statement or function declaration");
    }

## 2. Function Expression
    When we assign an anonymous function a varibale then it is called as a function expression.
    In this hoisiton does not work.

    let exp = function () {
    console.log("This is function expression")

    }

## 3. Named Function Expression
    When we assign a function statement or function declaration to a variable then we call it is as named function expression.

    let fn = function b() {
    console.log("This is named function expression")
    }

## 4. Anonymous Function
    The function that does not have name is called a anonymous Function.
    
    function () {
    console.log("This is anonomous fucntion")
    }


