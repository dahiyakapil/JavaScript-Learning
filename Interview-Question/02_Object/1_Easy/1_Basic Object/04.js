/*
    How do you test for an empty object

    1. Using Object.keys()
    2. using Object.entries()
    3. using for in loop

*/

const obj = {};

// if (Object.keys(obj).length === 0 && obj.constructor === Object) {
//     console.log("Object is empty")
// } else {
//     console.log("Object is not empty")
// }

// if (Object.entries(obj).length === 0 && obj.constructor === Object) {
//     console.log("Object is empty")
// } else {
//     console.log("Object is not empty")
// }


let isEmpty = true;
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        isEmpty = false;
        break;
    }
}

console.log(isEmpty ? "The object is empty" : "The object is not empty");
