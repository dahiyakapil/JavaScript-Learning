/*
    Can you stop a loop based on a specific condition?

    Yes wr can stop a loop based on specief condition, we can use break statment for that.

*/

// Find the first number divisible by 5 in an array
const numbers = [3, 8, 15, 22, 7, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    console.log(`Found a number divisible by 5: ${numbers[i]}`);
    break; // Exit the loop when condition is met
  }
}
console.log("Loop terminated.");
