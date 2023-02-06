const x = 1;

function foo() {
  const y = 2;

  function bar() {
    const z = 3;
    console.log(x + y + z);
  }
  bar();
}

foo();

/** 실행 순서 */
// 1. x와 foo 를 전역 실행 컨텍스트에 등록. (전역)
// 2. foo 함수 코드 평가와 실행
// 3. bar 함수 코드 평가와 실행 (중첩함수)
// 4. foo 함수 코드로 복귀 . bar 함수가 끝났으므로
// 5. 전역 코드로 복귀.
