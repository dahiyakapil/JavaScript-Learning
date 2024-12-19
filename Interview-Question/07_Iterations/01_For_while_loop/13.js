/*

    What is the difference between the break statement and the continue directive?
    
    In JavaScript, The break statement terminates the entire loop, while the continue directive skips the current iteration and proceeds to the next iteration in the loop.

    Technical Response: The break statement stops the loop in the middle or several places of its body. The continue directive is a “lighter version” of break. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip iteration when i equals 5
  }
  if (i === 8) {
    break; // Exit the loop when i equals 8
  }
  console.log(i); // Logs: 0, 1, 2, 3, 4, 6, 7
}
console.log("Loop ended.");
