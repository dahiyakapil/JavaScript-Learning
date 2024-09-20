/*

    def: A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise is in one of these states:

    1. Pending: Initial state, neither fulfilled nor 2. rejected.
    2. Fulfilled: Meaning that the operation completed successfully.
    3. Rejected: Meaning that the operation failed


    Work to do 
    -> Promise create
    -> using then and resolve
    -> attach then to the promise function
    -> resolve accepting object
    -> use reject to throw an error
    -> use async await and try catch inside promise
    -> calling api using fetch and getting data using async await
    -> fetch using .then and .catch

*/

// 1: using then and resolve
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task1 is completed");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// 2: attach then to the promise function
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is completed");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async task2 is resoloved");
});

// 3: resolve accepting object
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task4 is completed");
    resolve({ username: "Kapil", email: "kap@gmail.com", age: 22 });
  }, 2000);
});

promiseThree.then(function (userDetails) {
  console.log(userDetails);
});

// 4: use reject to throw an error
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Kapil Dahiya", password: 1234 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  });

// 5: use async await and try catch to handle errors
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Five", password: 555 });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// 6: calling api using fetch and getting data using async function, await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}
// getAllUsers()

// 7: fetch using .then and .catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error encountered:", error);
  });

// **************
try {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // parse the response
    })
    .then(function (data) {
      console.log(data); // Handle the parsed JSON data here
    })
    .catch(function (error) {
      console.error("Error in fetching", error);
    });
} catch (error) {
  console.error("Fetch failed", error);
}

// Async --> side by side


