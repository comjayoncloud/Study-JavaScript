/** Object.is 메서드 */
console.log(-0 === 0);
console.log(Object.is(-0, +0));

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
