/** 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가됨.
 * 이때 length 프로퍼티 값은 자동 갱신된다. */

const arr = [0];

arr[1] = 1;
console.log(arr);
console.log(arr.length);
