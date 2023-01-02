/** 함수 선언문 */
function add(x, y) {
  return x + y;
}
/** 함수 참조 */
// console.dir은 console.log와 달리 함수 객체의 프로퍼티까지 출력한다
// 단 node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add);
console.log(add);

console.dir(add(2, 5));
console.log(add(2, 5));
