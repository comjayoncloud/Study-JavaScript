//전역변수
var x = 1;

function foo() {
  var x = 10;
  console.log(x);
  bar();
}

// 전역함수
function bar() {
  console.log(x);
}

foo();
bar();
