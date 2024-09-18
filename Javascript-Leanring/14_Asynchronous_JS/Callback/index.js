/*
    
    1. Function that is passed on as argument to another function is called callback function.
    2. setTimeout helps turn JS which is singlethreaded and synchronous into asynchronous.
    3. Event listeners can also invoke closures with scope.
    4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used.

 */

// function x() {
//   console.log("this is function x");
// }

// const res = x(function y () {
//     console.log("This is call back function y")
// });

// // invoking the fucntion 
// console.log(res);
// console.log("Runs")

function x(y){
  console.log("This is function x")
  y();
}

x(function y(){
  console.log("This is function y")
})