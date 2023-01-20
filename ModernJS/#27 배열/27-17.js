/**
 * 희소 배열의 length는 희소 배열의 실제 요소 개수보다 언제나 크다.
 * empty 요소는 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않는다
 */

const sparse = [, 2, , 4];

console.log(sparse.length); // 4
console.log(sparse); // [empty , 2 , empty , 4 ]

console.log(Object.getOwnPropertyDescriptors(sparse)); // 0,2 나오지 않음 (empty임)
