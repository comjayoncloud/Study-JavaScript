/** var 문제점 2 : 함수 레벨 스코프 */

var i = 10;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

// 의도치 않게 i 바뀜.
console.log(i);
