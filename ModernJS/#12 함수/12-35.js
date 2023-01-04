/** 기명 즉시 실행 함수 */
(function foo() {
  var a = 3;
  var b = 5;
  console.log(a * b);
  return a * b;
})();
foo(); // error. foo is not defined
