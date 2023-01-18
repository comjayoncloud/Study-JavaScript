/** 카운트 상태 변수 */
let num = 0;

/** 카운트 상태 변경 함수 */
const increase = function () {
  return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());

/** 안좋은이유
 *
 *  1. 카운트 상태는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
 *  2. 이를 위해 카운트 상태는 increase 함수만이 변경할 수 있어야 한다.
 */
