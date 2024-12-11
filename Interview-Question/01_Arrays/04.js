/*  
     How do you sort elements in an array

     We will use sort method to sort the array elements but we will use compare function too 
     because when we use only sort() then the sort method sort the elements in lexographical order
     but when we the compare function then we can sort the elements in our desried output.
*/

let arr = [213, 818, 15, 90, 19, 9, 10];
let sortedArray = arr.sort((a, b) => a - b);
console.log(sortedArray);
