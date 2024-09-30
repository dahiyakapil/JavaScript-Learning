# Call method
The call method invokes a function with a specified this value and individual arguments passed as separate arguments. It allows you to borrow functions from one object and invoke them in the context of another.


NOTE: Call and Apply are pretty much interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

Bind creates a new function that will have this set to the first parameter passed to bind()

## Rules for applying call methods
1. call invokes the function immediately.
2. You can change the this context and pass arguments individually.
3. call is useful for method borrowing and function inheritance.
4. Be cautious with null or undefined as thisArg, especially in strict mode.

