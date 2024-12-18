/*

    There are 4 types of promises
    1. Promise.all
    2. Promise.allSettled
    3. Promise.race
    4. Promise.any

    Promise.all()
    In Promise.all... all the promise wait for to be resolved. And if any promise got rejected. There will be a error in any promise we will not get any promise response in console. ONLY the error will be printed on the console.

*/

// Promise.all()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("P1 success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("P2 success");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     reject("P3 success");
//   }, 2000);
// });

// Promise.all([p1,  p2, p3])
// .then((val) => {
//     console.log(val);
// })
// .catch((err) => {
//     console.error(err)
// })


// Promise.allSettled
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("P1 success");
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("P2 success");
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       reject("P3 success");
//     }, 2000);
//   });
  
//   Promise.allSettled([p1,  p2, p3])
//   .then((val) => {
//       console.log(val);
//   })
//   .catch((err) => {
//       console.error(err)
//   })
  

// Prmoise.race()
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("P1 success");
//     }, 3000);
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("P2 success");
//     }, 1000);
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       reject("P3 success");
//     }, 2000);
//   });
  
//   Promise.race([p1,  p2, p3])
//   .then((val) => {
//       console.log(val);
//   })
//   .catch((err) => {
//       console.error(err)
//   })
  

// Promise.any()
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("P1 success");
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("P2 success");
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("P3 success");
    }, 2000);
  });
  
  Promise.any([p1,  p2, p3])
  .then((val) => {
      console.log(val);
  })
  .catch((err) => {
      console.error(err)
  })
  