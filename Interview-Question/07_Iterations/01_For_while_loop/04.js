/*
    Does a while loop require an explicit incrementor?
    
    A while loop does not require an explicit incrementor. However, it is crucial to ensure the loop condition eventually becomes false to avoid infinite loops.
*/


// With Incrementor
let i = 3;
while (i) {
  console.log(i);
  i--; // if the incrementor (i--) is missing then it results in an endless loop.
}


let items = ['apple', 'banana', 'orange'];
while (items.length > 0) {
  console.log(items.pop()); //This loop removes and logs each item until the array is empty.
}


// infinte loop
// while(true) {
//     console.log("This is an infinte loop")
// }