/** 암묵적 타입변환 or 타입 강제 변환 */

var x = 10;

// 암묵적 타입변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str);

// x 변수의 값이 변경된 것은 아니다
console.log(typeof x, x);
