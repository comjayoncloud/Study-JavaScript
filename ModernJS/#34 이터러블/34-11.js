/**
 * 유사 배열 객체를 배열(이터러블)로 변환 하기 위해선
 * ES6에서 도입된 Array.from 메서드를 사용하자.
 */

const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

console.log(arrayLike);
const arr = Array.from(arrayLike);
console.log(arr);
