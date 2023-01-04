//** 전역함수 */
function foo() {
  console.log("global foo");
}

function bar() {
  // 중첩함수
  function foo() {
    console.log("local foo");
  }
  foo();
}

bar();
foo();
