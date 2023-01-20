/** Array.prototype.reduce */

const sum = [1, 2, 3, 4].reduce(
  (acc, curVal, index, array) => acc + curVal + 0
);

console.log(sum);
