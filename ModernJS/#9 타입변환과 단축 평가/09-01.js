/** 명시적 타입 변환 or 타입 캐스팅 */
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str);

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x);
