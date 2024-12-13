/*
    What is the temporal dead zone (TDZ) in block scope?


    The Temporal Dead Zone (TDZ) refers to the period in which a variable declared using let, const, or class exists in the block's scope but is not accessible until the declaration has been executed. Accessing the variable during this period results in a ReferenceError.

    In simpler terms, the TDZ is the time between entering the scope of a variable and its declaration being processed.


    Key Points about the TDZ:

    1. Applies to let, const:
        Variables declared with var do not have a TDZ because they are hoisted and initialized with undefined immediately.

    2. Starts at the Beginning of the Scope:
        The TDZ starts when the scope (like a block or function) is entered.

    3. Ends When the Variable is Declared:
        The TDZ ends when the variable's declaration is encountered in the code.
        
    4. Accessing the Variable Before Declaration:
        Trying to access the variable in the TDZ results in a ReferenceError.
*/

{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  /*
    
    
    This is Temporal Dead Zone
    
    
    */
  let x = 5; // TDZ ends here
  console.log(x); // 5
}
