/*
    How do you break out of two nested for loops?

    1. Use a Labeled Statement
    A labeled statement allows you to assign a label to a loop. You can then use the break statement to exit the labeled loop, even if it's an outer loop.


    2. Use a Flag Variable
    You can use a boolean variable to signal when to break out of both loops.
*/

outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
        if (i === 1 && j === 1) {
            break outerLoop; // Exits both loops
        }
    }
}
console.log("Exited both loops.");

let shouldBreak = false;

console.log("**************************************")

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i=${i}, j=${j}`);
        if (i === 1 && j === 1) {
            shouldBreak = true;
            break; // Exit the inner loop
        }
    }
    if (shouldBreak) {
        break; // Exit the outer loop
    }
}
console.log("Exited both loops.");
