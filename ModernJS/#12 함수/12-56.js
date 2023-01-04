/** 순수 함수  */

var count = 0;

function increase(n) {
  return ++n;
}

/** 순수함수가 반환한 결과값을 변수에 재할당해서 상태를 변경 */
count = increase(count);
console.log(count); // 1

count = increase(count);
console.log(count); // 2
