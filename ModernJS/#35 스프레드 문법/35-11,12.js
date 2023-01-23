/** splice -> 스프레드 */

// splice
var arr = [1, 4];
var arr2 = [2, 3];
arr.splice(1, 0, arr2);
console.log(arr); // [ 1, [ 2, 3 ], 4 ] 의도한 결과가 아님

// splice ver 2
var arr1 = [1, 4];
var arr2 = [2, 3];
Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1);

// 스프레드
const arr3 = [1, 4];
const arr4 = [2, 3];
arr3.splice(1, 0, ...arr4);
console.log(arr3);
