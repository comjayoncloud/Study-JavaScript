/** 표현식인 문은 값처럼 사용할 수 있다 */
var foo = (x = 100);
console.log(foo); // 100

/** 크롬 개발자 도구 예시 */

var num = 10;
//undefined;

/** 표현식 문 */
100 + num;
// 110

/** 할당문 */
num = 100;
// 100