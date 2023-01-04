/** var 문제점 2 : 함수 레벨 스코프 */

var x = 1;

if (true) {
  // x는 전역변수임 . 이미 밖에 선언되어있으니 중복 선언이다.
  var x = 10;
}

console.log(x);
