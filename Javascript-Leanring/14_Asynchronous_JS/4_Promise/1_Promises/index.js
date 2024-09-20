/*

    Promise is an object which represnt the eventual completion or failure of asynchronous opearation.

    There are three states of promise:
    1. Pending (intial state)
    2. Fullfilled
    3. Rejected

    Promise result ---> firstly it is undefined, and eventually in result got response in it

    Promises are immutatable, we can't update the state of promise

    


*/

const GITHUB_URL = "https://api.github.com/users/dahiyakapil";
const user = fetch(GITHUB_URL); // first it will be undefined and then will return a promise state : Pending

// but when we console the user the state will be fullfilled and prmoise will be pending again, promise result will be Response
console.log(user) 
