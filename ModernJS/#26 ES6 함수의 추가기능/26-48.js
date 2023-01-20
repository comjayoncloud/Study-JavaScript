/** 함수 자체의 arguments 바인딩을 갖지 않는다. this와 마찬가지로 상위 스코프의 arguments를 참조한다. */

(function () {
  // 화살표 함수 foo의 arguments는 상위 스코프인 즉시 실행함수의 arguments를 가리킨다.
  const foo = () => console.log(arguments);
  foo(3, 4);
})(1, 2);

// 화살표 함수 foo의 arguements는 상위 스코프인 전역의 arguements를 가리킨다.
// 하지만 전역에는 arguments 객체가 존재하지 않는다. arguments 객체는 함수 내부에서만 유효하다.

const foo = () => console.log(arguments);
foo(1, 2);
