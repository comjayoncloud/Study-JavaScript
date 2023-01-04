var x = 1;
if (true) {
  // var를 썻기에 함수 몸체만을 지역 스코프로 인정
  // x는 전역변수. x변수는 중복 선언 된다.
  var x = 10;
}

console.log(x);
