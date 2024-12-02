/*
    How do you loop through or enumerate javascript object

    1. Using for in loop
    2. Using Object.keys with for each
    3. Using Object.values with for each
    4. Using Object.entries with for of

*/

const obj = {
    name: "Kapil",
    age: 22
}

// for(const key in obj) {
//     if (obj.hasOwnProperty(key)){
//         console.log(`${key}: ${obj[key]}`)
//     }
// }

// Object.keys(obj).forEach(key => {
//     console.log(`${key}: ${obj[key]}`)
// })

// Object.values(obj).forEach(value => {
//     console.log(value)
// })

// for(const [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`)
// }