/*  

    find ---> it just give the value from the array if the  value is present

*/


let arr = [1, 2, 3, 4];

let res = arr.find(function(val) {
    if(val === 2) return val;
})

console.log(res);