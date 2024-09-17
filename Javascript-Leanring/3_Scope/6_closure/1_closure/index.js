// function x() {
//     var i = 1;
//     setTimeout(function() { // forms a closure with i (function with lexical env of parent fun)
//         console.log(i)
//     }, 1000)
//     console.log("Runs") // synchronous
// }

// x();

// Print 1 2 3 4 5 in after 1 second

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Runs")
// }

// x();

/*

    Reason for this
    1. var is gloabl scope varilable
    2. setTimeout function creates a lexical env with the value of i
    3. It forms a closure
    4 When setTimeout is called inside the loop, it creates a closure that captures the reference to the variable i. However, it does not capture the value of i at the time setTimeout is called.

    Solution for this 
    wrap inside a function and then execute
    

*/

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function y(i){
//             setTimeout(function () {
//                 console.log(i);
//               }, i * 1000);
//             }
//             y(i)
//         }
//     console.log("Runs")
//   }
  
//   x();

// let behaves different in this case

function x() {
    for(let i = 1; i <= 5; i++) {
        setTimeout( function(){
            console.log(i)
        }, i * 1000)
    }
    console.log("Let variable")
}

x();

/*

    1. let is block scope variable and it forms a closure with it
    2. when the loop runs it creates a new copy of i and pass to the console
    3. it does not pass the refrenece instead it pass the new value everytime when loop executes
    
*/