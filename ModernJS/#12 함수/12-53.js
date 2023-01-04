/** 고차함수 */
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

/** logOdds 함수는 단한번만 생성됨. */
var logOdds = function (i) {
  if (i % 2) return console.log(i);
};

/** 고차함수에 함수 참조를 전달. */
repeat(5, logOdds);
