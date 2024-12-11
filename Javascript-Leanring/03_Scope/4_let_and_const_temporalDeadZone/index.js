/*
    1. let and const are hoisted but its memory is allocated at other place (Strict space)than window which cannot be accessed before initialisation.
    2. Temporal Dead Zone exists until variable is declared and assigned a value.
    3. window.variable OR this.variable will not give value of variable defined using let or const because let and const vairables are placed in other memory space (Script Space)
    4. We cannot redeclare the same variable with let/const(even with using var the second time).
    5. const variable declaration and initialisation must be done on the same line.
    6. There are three types of error: 
        [1] referenceError {given where variable does not have memory allocation}
        [2] typeError {given when we change type that is not supposed to be changed like in const} 
        [3] syntaxError {when proper syntax(way of writing a statement) is not used}.
    7. Use const wherever possible followed by let
    Use var as little as possible(only if you have to). It helps avoid error.
    8. Initialising variables at the top is good idea, helps shrinks TDZ to zero.
*/



// undefined in gloabl space as var is global variable its memory space is in gloabl scope

console.log(b); // undefined placeholder
console.log(a) // will be in temporal dead zone
/*

    This is the temporal dead zone before initilization for let and const 
    they are not direclty hoisted temporal dead zone is created for them 
    in this state value of a = undeifnied in other memory space

    ReferenceError: Cannot access 'a' before initialization

*/
let a = 10; 
console.log(a);
var b = 50;


/*
    Screenshot
    Firstly a gloabl scope is created for this code
    and then Execution is created for the vaiables inside exexcution context = Memory creation phase is created and then code phase is also created. 
*/