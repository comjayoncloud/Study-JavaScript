/**
 * ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
 * 이전 모든 함수는 callable이면서 constructor다.
 */

var obj = {
  x: 10,
  f: function () {
    return this.x;
  },
};

console.log(obj.f());

var bar = obj.f;
console.log(bar());

console.log(new obj.f());
