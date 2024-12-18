// const user = {
//     firstName: "Kapil",
//     lastName: "Dahiya",
//     getFullName: function(hometown, country) {
//         console.log(this.firstName + " " + this.lastName + " from " + hometown + " and from " + country);
//     }
// }

// const user2 = {
//     firstName: "Iron",
//     lastName: "man"
// }


// // let's try to call the function from ohter user

// user.getFullName.call(user2, "Panipat", "India");
// // user.getFullName.apply(user2)

// Now let's try to call the frunction standalone

const user = {
    firstName: "Kapil",
    lastName: "Dahiya",
    
}

const user2 = {
    firstName: "Iron",
    lastName: "man"
}

function getFullName(hometown, country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " and from " + country);
}


// let's try to call the function from ohter user

// Passing arguments in simple way
getFullName.call(user, "Panipat", "India");
getFullName.call(user2, "New York", "USA");

// Pasisng arguments in array list
getFullName.apply(user, ["Panipat", "India"]);
getFullName.apply(user2, ["New York", "USA"]);
