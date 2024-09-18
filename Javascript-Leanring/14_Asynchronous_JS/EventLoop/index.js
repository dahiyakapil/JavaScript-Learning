console.log("Start");

setTimeout(function xyz() {
  console.log("Set Timeout function ");
}, 5000);

fetch("https://api.restful-api.dev/objects")
.then(function cbF() {
  console.log("API calling");
});

console.log("End");
