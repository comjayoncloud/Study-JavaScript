/** 현재 length 프로퍼티 값보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다 */
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

arr.length = 3; // 강제로 배열의 길이 정함
console.log(arr.length); // 3
console.log(arr); // [1,2,3]

arr.length = 5; // 다시 늘려도 기존에 삭제된 값 복구 안됨
console.log(arr.length);
console.log(arr);
