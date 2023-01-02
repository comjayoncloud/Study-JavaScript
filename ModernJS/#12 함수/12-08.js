/**
 * 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
 * 함수 선언문에서는 함수 이름을 생략할 수 없다
 */

function foo() {
  console.log("jaewoo");
}

foo();

(function bar() {
  console.log("bar");
});

bar(); // 안됨

// -> foo는 함수 선언문. bar는 함수를 가리키는 식별자가 없음.
