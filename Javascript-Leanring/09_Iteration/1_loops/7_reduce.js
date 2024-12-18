const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const res = numbers.reduce((accumulator, current) => {
//   console.log(`accumulator: ${accumulator}, item: ${current}`);
//   return accumulator + item;
// }, 0);

// console.log(res);

const ans = numbers.reduce(function (acc, curr) {
  console.log(`acc: ${acc} curr: ${curr}`);
  return acc + curr;
}, 0);

console.log(ans);
