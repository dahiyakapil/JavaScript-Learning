/*
    How do you create an infinite loop in JavaScript intentionally?

    1. while Loop with true
    The while loop runs as long as the condition evaluates to true. Setting the condition to true ensures it runs forever.

    2. for Loop Without Termination
    In a for loop, the termination condition is optional. If omitted or set to always evaluate to true, the loop will run forever.

    3. do...while Loop with true
    The do...while loop runs at least once and continues while the condition is true.

*/


// while (true) {
//     console.log("This is an infinite loop");
// }


// for (;;) {
//     console.log("This is an infinite loop");
// }


do {
    console.log("This is an infinite loop");
} while (true);
