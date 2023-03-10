/** 원시 값을 할당한 변수를 다른 변수에 할당하는 것을 깊은복사,
 * 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는
 * 경우가 있다.
 */

const v = 1; // 원시
const o = { x: 1 }; // 객체

/** 깊은복사 */
// 원시 값 변수를 다른 변수에 할당
const c1 = v;
console.log(c1 === v);

/** 얕은복사 */
// 객체 변수를 다른 변수에 할당
const c2 = o;
console.log(c2 === o);
