const user = {
    firstName: "Kapil",
    lastName: "Dahiya"
}


let printFullName = function (hometown, country) {
    console.log(this)
    console.log(this.firstName + " " + this.lastName + " from " + hometown +" , " + country);
}

const user2 = {
    firstName:"Iron",
    lastName: "man"
}

let printName = printFullName.bind(user2, "New York", "USA");
console.log(printName);
printName();