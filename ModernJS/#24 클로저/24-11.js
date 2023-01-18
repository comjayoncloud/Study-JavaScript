const increase = (function () {
  let num = 0;

  return function () {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());

/**
 * 즉시 실행함수는 한번만 실행되므로 increase가 호출될 때마다 num 변수가
 * 재 초기화 될 일이 없음. num 변수는 외부에서 직접 접근할수 없는 은닉 변수
 * 이므로 전역변수를 사용했을 때와 같이 의도되지 않은 변경을 걱정할 필요도 없음.
 */
