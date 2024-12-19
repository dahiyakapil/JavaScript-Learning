/*
    Can you explain how the do-while loop works in JavaScript?

    The do-while loop firslty exexutes the loop, and then check the conditon. if it is truthy then loop executes further more until a ceetain conditon is met. 
*/

let i = 0;
do {
  console.log(i);
  i++; // if we don't write the i++, then the loop will run or execute infinte.
} while (i < 5);
