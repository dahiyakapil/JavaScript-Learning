/*
    How do you define JSON arrays
    
    JSON arrays are written inside square brackets and arrays contain javascript objects. For example, the JSON array of users would be as below,

*/

const users = [
  {"firstName":"John", "lastName":"Abrahm"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Shane", "lastName":"Warn"}
]

// Mapping
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`)
console.log(fullNames)

// Filtering
const filteredUsers = users.filter(user => user.firstName === "John");
console.log(filteredUsers);

// Iterating over users Using for each Loop
users.forEach(user => {
    console.log(`${user.firstName} ${user.lastName}`)
})

// Adding a new property to the users
const updateUsers = users.map(user=> ({
    ...user, fullName: `${user.firstName} ${user.lastName}`
}))
console.log(updateUsers)

// Sorting users by Last name..sort the users alphabetically by their last name:
const sortedUser = users.sort((a, b) => a.lastName.localeCompare(b.lastName));
console.log(sortedUser)