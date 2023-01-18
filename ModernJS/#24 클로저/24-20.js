/** 클로저 사용할때 자주 발생할 수 있는 실수 */

var funcs = [];

// 배열 안에 3개의 요소 (함수) 만듦
for (var i = 0; i < 3; i++) {
  funcs[i] = function () {
    return i;
  };
}

// 3번 반복 하는데 배열안의 요소들을 하나씩 콘솔로그
for (var j = 0; j < funcs.length; j++) {
  console.log(funcs[j]());
}
