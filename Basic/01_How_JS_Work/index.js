let n = 2; // undefined due to exexcution context
function square(num) { 
  let ans = num * num;
  return ans;
}

let squareOf2 = square(n);
let squareOf4 = square(4);


console.log(squareOf2);
console.log(squareOf4);
console.log(n);
