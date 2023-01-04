function multiply(x, y) {
  return x * y; // 반환문
  // 실행안됌
  console.log("hehe");
}

/** 함수 호출은 반환값으로 평가된다 */
var result = multiply(2, 5);
console.log(result);
