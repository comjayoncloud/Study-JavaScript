/** 매개변수의 기본값은 함수 정의시 선언한 매개변수 개수를 나타내는
 *  length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다. */

function sum(x, y = 0) {
  console.log(arguments);
  return x + y;
}

console.log(sum.length); // 1 왜 1인가..? 0,1 즉 2개 . z 까지 넣으면 결과는 2 가 나온다.

sum(1);
sum(1, 2);
