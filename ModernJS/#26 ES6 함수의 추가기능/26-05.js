/** ES6 에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다. */

const obj = {
  x: 1,
  // foo는 메서드
  foo() {
    return this.x;
  },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수.
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo());
console.log(obj.bar());
