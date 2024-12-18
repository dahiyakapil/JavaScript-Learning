/*

*/


// Example of callback hell
// const res = firstFunction(function(err, data) {
//     if (err) {
//         console.error(err);
//     } else {
//         secondFunction(data, function(err, data) {
//             if (err) {
//                 console.error(err);
//             } else {
//                 thirdFunction(data, function(err, data) {
//                     if (err) {
//                         console.error(err);
//                     } else {
//                         // Continue nesting more callbacks...
//                     }
//                 });
//             }
//         });
//     }
// });

// console.log(res);

const cart = ["shoes", "jeans", "shirts"];

api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function() {
            api.updateWallet();
        })
    })
})

/*

    Callback Hell

    In this function createOrder api has a cart as argument, callback function proceedToPayment() and  proceedToPayment has another callback function showOrderSummary() and further more showOrderSummary has another callback function updateWallet()

    So, alll the callbacks depend on their previous callback, so it is not good, cause the function does not when the another function will execute or not.

    When a function call another function and then that fucntion calls another function too, and this function call goes in nested call back, so this is known as callback hell.
    and this behaviour is also known as pyramid of doom.

    Inversion of control (Safety)
    The function proceedToPayment is a risky part cause it blindly trust on the createOrder api. And this function proceedToPayment does not know weather this function will exexute or not. Or there may be a chance that this call back function has written by other devloper so safety is not there.
*/