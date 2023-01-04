/** 콜백 함수 */
// f 가 추상화.
// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  console.log(i);
};

// 5번 반복, logall 5번 실행
repeat(5, logAll);

var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 5번 반복, logOdds 5번 실행
repeat(5, logOdds);
