/** concat -> 스프레드 */

// concat
var arr = [1, 2].concat([3, 4]);
console.log(arr);

// 스프레드
const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2);
