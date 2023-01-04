/** 팩토리얼 재귀함수 */

function factorial(n) {
  // 탈출 조건
  if (n <= 1) {
    return 1;
  }
  // 재귀 호출
  return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
