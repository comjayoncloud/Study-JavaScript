/** let 장점2 키워드 블록 레벨 스코프 */

let foo = 1; //전역

{
  let foo = 2; // 지역
  let bar = 3; // 지역
}

console.log(foo); // 1
console.log(bar); // 에러
