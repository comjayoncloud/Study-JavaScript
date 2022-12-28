/** 암묵적 타입 변환 예제 */

/** 숫자 타입 */
0 + "" - 0 + "";
1 + "" - 1 + "";
NaN + "";
Infinity + "" - Infinity + "";

/** 불리언 타입 */
true + "";
false + "";

/** null 타입 */
null + "";

/** undefined 타입 */
undefined + "";

/** 심벌타입 */
//Symbol() + ""; // Type Error 발생

/** 객체 타입 ! 이부분은 잘 보자*/
console.log({} + "");
console.log(Math + "");
console.log([] + "");
console.log([10, 20] + "");
console.log(function () {} + "");
console.log(Array + "");
