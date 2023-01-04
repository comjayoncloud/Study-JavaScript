/** 비순수 함수 */

var count = 0;
function increase() {
  return ++count;
}

/** 비순수 함수는 외부상태(count)를 변경하므로 상태 변화를 추적하기 어렵다 */
increase();
console.log(count);
increase();
console.log(count);
