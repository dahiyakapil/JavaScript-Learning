/*

    for each work with anonymous function
    for each does not return in function


*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(function(item) {
    // console.log(item)
})

arr.forEach((item) => {
    // console.log(item)
})

arr.forEach((item ,index, arr) => {
    // console.log(item, index, arr)
})

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


// will not return
// const values = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })