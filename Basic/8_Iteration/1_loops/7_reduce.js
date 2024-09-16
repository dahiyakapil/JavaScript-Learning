const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = numbers.reduce((accumulator, item) => {
  console.log(`accumulator: ${accumulator}, item: ${item}`);
  return accumulator + item;
}, 0);

console.log(res);
