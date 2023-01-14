/** 전역 변수 선언 */

const x = 1;
const y = 2;

function foo(a) {
  /** 지역 변수 선언 */
  const x = 10;
  const y = 20;

  console.log(a + x + y);
}

foo(100);

console.log(x + y);
