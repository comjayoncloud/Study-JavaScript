// 코드 선두에 위치시키지 않으면 제대로 작동하지 않는다.
function foo() {
  x = 10;
  ("use strict");
}

foo();
