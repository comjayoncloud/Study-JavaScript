/** 일반 함수 정의: 함수선언문 , 함수 표현식 */
function foo() {}
const bar = function () {};

/** 프로퍼티 x의 값으로 할당된 것은 일반함수로 정의된 함수. 이는 메서드로 인정되지 않는다 */
const baz = {
  x: function () {},
};

/** 일반함수로 정의된 함수만이 constructor다 */
new foo();
new bar();

new baz.x(); // -> x {}

/** 화살표 함수 (non-constructor) */
const arrow = () => {};

new arrow(); // error

/** 메서드 정의 :ES6 축약표현 (non-constructor) */
const obj = {
  x() {},
};

new obj.x(); // error
