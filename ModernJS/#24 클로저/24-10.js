const increase = function () {
  let num = 0;

  return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());

/** 결과는 변화가 없음 .왜냐면 increase 호출할때마다 num이 계속 0으로 재초기화됨 */
