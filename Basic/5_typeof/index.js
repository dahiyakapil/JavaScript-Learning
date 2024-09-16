// typeof function used for checking the data type of the variable or object

var a = 'hey'
console.log(typeof (a));


// cheking function------------------------------------
function fun() {
    let m = 10
    let n = 10
    let res = m + n
    return res
}

console.log(fun())
console.log(typeof (fun()));

// chekcing object------------------------------------
const obj = {
    name: "Kapil",
    age: 21
}

for (let prop in obj) {
    console.log(obj[prop]);  // Accessing the value of the property
}

