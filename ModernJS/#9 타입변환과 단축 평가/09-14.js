/** String 생성자 함수를 new 연산자 없이 호출하는 방법 */
String(1);
String(NaN); // NaN
String(Infinity);
String(true);
String(false);

/** Object.prototype.toString 메서드를 사용하는 방법 */
(1).toString();
NaN.toString();
Infinity.toString();
true.toString();
false.toString();

/** 문자열 연결 연산자를 이용하는 방법 */
1 + "";
NaN + "";
Infinity + "";
true + "";
false + "";
