/*
    Can the continue or break directives be used with the shorthand ternary (?:) expression?

    No there will be an error.

    You can use a ternary operator for simple value assignment, but you'll still need an if statement to handle continue or break logic:
*/


// for (let i = 0; i < 5; i++) {
//     i === 2 ? continue : console.log(i); // Syntax Error
// }

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip this iteration
    }
    console.log(i); // Logs: 0, 1, 3, 4
}

console.log("----------------------")

for (let i = 0; i < 5; i++) {
    (i === 2) ? console.log("Skipping 2") : console.log(i); // Logs: 0, 1, "Skipping 2", 3, 4
    if (i === 2) continue;
}
