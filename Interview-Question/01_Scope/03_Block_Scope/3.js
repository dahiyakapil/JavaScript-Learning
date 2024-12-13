/*
    Explain the differences in scope behavior between var, let, and const in a for loop.


*/

/*

    1. var in a for Loop
        Scope:

        var is function-scoped, meaning it is accessible throughout the entire function in which it is declared, regardless of block boundaries.
        In a for loop, the var variable is shared across all iterations, which can lead to unexpected behavior.
        Behavior:

        The value of the var variable is updated on each iteration, and all closures referencing it share the same variable.
*/

for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

/*
    2. let in a for Loop
        Scope:

        let is block-scoped, meaning each iteration of the loop gets its own separate instance of the variable.
        The value of let is bound to the iteration it belongs to.
        Behavior:

        Each iteration has its own unique let variable, so closures created inside the loop reference the correct value for that iteration.

*/

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}

/*
    3. const in a for Loop
        Scope:

        const is also block-scoped, similar to let. However, variables declared with const cannot be reassigned once declared.
        In a for loop, this means const can only be used when the loop does not attempt to reassign the variable.
        Behavior:

        When used in a regular for loop, attempting to reassign the loop variable with const causes an error.
        However, const works fine in a for...of or for...in loop, where the variable is assigned a new value for each iteration.
*/

for (const i = 0; i < 3; i++) {
  console.log(i);
}
// Error: Assignment to constant variable
