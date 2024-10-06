/*

    Promise is an object which represnt the eventual completion or failure of asynchronous opearation.
    There is callback function in which resolve and reject are the parameters.
    Resolve means success or Reject means failure (i.e.network error)

    There are three states of promise:
    1. Pending (intial state)
    2. Fullfilled - meaning that the opeartion was completed successfully
    3. Rejected - meaning that the operation has failed

    Promise result ---> firstly it is undefined, and eventually in result got response in it and after some time there will promise state : Pending

    Promises are immutatable, we can't update the state of promise

    key Points
    1. Promises help to handle async code in js


*/



// const cart = ["shoes", "jeans", "shirts"];


// // without promise
// // createOrder(cart, function(orderId){
// //   proceedToPayment(orderId)
// // }) 

// // with promise
// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId)
//   }) 

const GITHUB_URL = "https://api.github.com/users/dahiyakapil";
const user = fetch(GITHUB_URL); // first it will be undefined and then will return a promise object after some time when the data will be there and state of promise will be : Pending



console.log(user) //  but when we console the user the state will be fullfilled and prmoise will be pending again, promise result will be Response .......... runs sync as fetch was doing async operation of fetching the github url data and js does not wait for anyone to execute so that's why it shows the promise is pending 


user.then(function (data) { // it will print the data and promise state will be fullfilled and promise result will be response
    console.log(data);
})

