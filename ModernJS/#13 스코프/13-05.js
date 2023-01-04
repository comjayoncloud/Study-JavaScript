/** var 키워드로 선언한 변수의 중복 선언 */
function bar() {
  let x = 1;
  let x = 2;
  console.log(x);
}

bar(); // 에러뜬다. let 이나 const 로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
