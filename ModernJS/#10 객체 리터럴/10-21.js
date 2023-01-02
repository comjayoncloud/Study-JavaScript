/** ES5 */

var prefix = "prop";
var i = 0;

var obj = {};

/** 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성 */
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;
obj[prefix + "-" + ++i] = i;

console.log(obj);

////////////////////////////////////////////////////////////////////////////////////////////////////

/** ES6 */

const prefix2 = "prop";
let i = 0;

/** 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성 */
const obj2 = {
  [`${prefix2}-${++i}`]: i,
  [`${prefix2}-${++i}`]: i,
  [`${prefix2}-${++i}`]: i,
};

console.log(obj2);
