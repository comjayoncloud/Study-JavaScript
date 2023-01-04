/** var 키워드로 선언한 변수의 중복 선언 */
function foo() {
  var x = 1;
  var x = 2;
  console.log(x);
}

foo();
