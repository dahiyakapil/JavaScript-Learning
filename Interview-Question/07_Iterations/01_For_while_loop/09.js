/*
    What is a for-Loop inline variable declaration?

    Inline variable declaration is the process of declaring a variable starting point inside of the for-loop. The variable is only visible inside the loop and cannot be accessed globally.
    The inline variable scope is inside the loop body.
    But outside the loop body we can not access the inline varible.


*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // i is not defined, cannot access i
