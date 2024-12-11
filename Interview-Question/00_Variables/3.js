// // What are global variables

let x = 10;
function readvalue() {
  let x = 20;
  console.log("Local Scope - ", x); // 20 (shadows the global x)
}

readvalue();
console.log("Glabal Scope - ", x); // 10 due to global scope



