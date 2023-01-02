/** es5 객체 리터럴 */

var x = 1,
  y = 2;

var obj = {
  x: x,
  y: y,
};

console.log(obj);

/** ES6 객체 리터럴 */

let x = 1,
  y = 2;

/** 프로퍼티 축약 표현 */
const obj = { x, y };

console.log(obj);

/** var로도 됨. */
var a = 1,
  b = 2;

var obj2 = { a, b };
console.log(obj2);

// 프로퍼티 축약표현은 프로퍼티 값으로 변수를 사용하는 경우 , 변수 이름과 프로퍼티 키가 동일한 이름일때 생략!
