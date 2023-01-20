/** 일반 배열 vs js 배열
 * 1. js 배열이 성능면에서 더빠름.
 */

const arr = [];

console.time("Array performance test");

for (let i = 0; i < 1000000; i++) {
  arr[i] = i;
}

console.timeEnd("Array performance test");

const obj = {};

console.time("Array performance test");

for (let i = 0; i < 1000000; i++) {
  arr[i] = i;
}

console.timeEnd("Array performance test");
6;
