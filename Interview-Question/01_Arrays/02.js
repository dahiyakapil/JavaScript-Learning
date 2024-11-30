/*
    What is the purpose of the array splice method

    The purpose of splice method is that it removes or add the elements in the orignal array.
    It returns the deleted items from the array. It takes two arguments start index & end index.
    The start index will specifies for the insertion or deletion of the element and the second argument indicates that the number of elements to be deleted. The second argument is optional.

    Note: Splice method modifies the original array and returns the deleted array.

*/

let arr = [1, 2 , 3, 4, 5];
// let result = arr.splice(0, 3);
// console.log(result); // [1, 2, 3]
// console.log(arr); // modified array -----> [4, 5]

console.log("Insertion in array");
let result2 = arr.splice(2, 1, "Kapil"); 
// start index=2, items to be deleted=1, inserting elements at the position of deleted item = Kapil
console.log(arr);

