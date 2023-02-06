var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  };
})();

console.log(add1(1, 2));

var add2 = (function () {
  var a = 10;
  return new Function("x", "y", "return x+y+a");
})();

console.log(add2(1, 2)); // error
// 클로저는 아직 안봤기때문에 나중에 보고. 함수 선언문이나 함수 표현식으로 생성한 함수와 Function 생성자 함수로
// 생성한 함수가 동일하게 동작하지 않는다는데 주목하자
