/**
 * 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다.
 * 이때 추가된 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.
 */
const arr = [];

// 배열 요소 추가
arr[0] = 1;
arr["1"] = 1;

// 프로퍼티 추가
arr["foo"] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;

console.log(arr);
console.log(arr.length);
