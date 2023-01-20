/** 현재 배열 length 프로퍼티 값보다 큰 인덱스로 새로운 요소 추가하면 희소배열이 된다. */

const arr = [0];
arr[100] = 100;
console.log(arr);
console.log(arr.length);
