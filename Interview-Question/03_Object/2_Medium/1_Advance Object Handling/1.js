/*
    What is the main difference between Object.values and Object.entries method

    The main difference is that the Object.values returns the array instead of key, value pairs.
    And the Object.entries returns the key, value pairs.
*/

const obj = {
    name: "Kapil",
    age: 22
}

for(const value of Object.values(obj)){
    console.log(value)
}

for(const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}