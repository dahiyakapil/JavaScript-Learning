

/*

    Call method is also known as function borrowing
    Each method has access to this keyword

*/

// using call with object method ...............................................................................

const user = {
    firstName: "Kapil",
    lastName: "Dahiya",
    getFullName: function() {
        console.log(this)
        console.log(this.firstName + " " + this.lastName)
    }
}

const user2 = {
    firstName: "Iron",
    lastName: "Man"
}

// let's borrow the function from user and use inside in our user2 object 

user.getFullName();
user.getFullName.call(user2);

// using call with object and normal function ..........................................................................


// const user = {
//     firstName: "Kapil",
//     lastName: "Dahiya",
// }

// function getFullName(hometown, country) {
//     console.log(this)
//     console.log(this.firstName + " " + this.lastName + " from " + "" + hometown + " and country from " + country)
// }

// const user2 = {
//     firstName: "Iron",
//     lastName: "Man"
// }

// // let's borrow the function from user and use inside in our user2 object 

// getFullName.call(user, "Panipat", "India");
// getFullName.call(user2, "New York", "USA");

