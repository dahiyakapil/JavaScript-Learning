# Function

## 1. Function Statement or Function Declaration
<<<<<<< HEAD
    Function Statement or function declaration is just a normal function in which just give a naming convention to the function. With the help of this function statement we can perform hoisting. It means we can call the function without it's declaration
=======
Function Statement or function declaration is just a normal function in which just give a naming convention to the function. With the help of this function statement we can perform hoisting. It means we can call the function without it's declaration
>>>>>>> f38e529f539732dcc6fbf1cbe97006a0dfb8a055


    abc() // hoisting to the top before declaration

    function abc () {
        console.log("This is function statement or function declaration");
    }

## 2. Function Expression
<<<<<<< HEAD
    When we assign an anonymous function a varibale then it is called as a function expression.
    In this hoisiton does not work.
=======
When we assign an anonymous function a varibale then it is called as a function expression.
In this hoisiton does not work.
>>>>>>> f38e529f539732dcc6fbf1cbe97006a0dfb8a055

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

<<<<<<< HEAD
## 5 Difference between parameters and arguments
     When we creating a function  & put some variabels in this ( ) that is our Parameters.
       For Ex - function ab( param1, param2 ){
                              console.log(" ")
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
       For Ex - ab( 4, 5 );

       function getValue (a, b) { // parameters
        return a + b;
    }

    console.log( getValue(1, 2)); // arguments
=======

>>>>>>> f38e529f539732dcc6fbf1cbe97006a0dfb8a055

