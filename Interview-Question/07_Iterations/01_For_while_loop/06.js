/*
    What is the difference between a Do-While and a While Loop?

    In Do-while loop, the loop executes once ant then the conditon is checked.
    But in while loop the condition is checked first and then the loop body execute. 
*/

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

console.log("-----------------------------------");

let i = 0;
while (i < 10) {
  console.log(i);
  i++; // if we don't write the i++, the loop will exexcute infinte times.
}
