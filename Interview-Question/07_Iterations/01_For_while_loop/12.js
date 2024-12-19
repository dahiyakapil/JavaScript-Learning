/*
    How does the continue directive work in a loop?

    The continue directive is a "lighter version" of the break statement. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

    In JavaScript, the 'continue' directive skips the current iteration of a loop and proceeds to the next. It doesn't stop the entire loop, just the current iteration.

*/

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
