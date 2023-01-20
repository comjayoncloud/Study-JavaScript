/**
 * 배열생성방법 - 4. Array.from
 * ES6에서 도입됨. 유사 배열 객체 또는 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환.
 */

const arr1 = Array.from({ length: 2, 0: "a", 1: "b" });
console.log(arr1);

const arr2 = Array.from("hello");
console.log(arr2);

const arr3 = Array.from({ length: 3 });
console.log(arr3);

// 두번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환.
const arr4 = Array.from({ length: 3 }, (_, i) => i);
console.log(arr4);

/** 유사배열 객체 형태 */
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3,
};

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}
