/** Number 생성자 함수를 new 연산자 없이 호출하는 방법 */
Number("0");
Number("-1");
Number("10.53");
Number(true);
Number(false);

/** parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자타입으로 변환 가능) */
parseInt("0");
parseInt("-1");
parseFloat("10.53");

/** + 단항 산술 연산자를 이용하는 방법 */
+"0";
+"-1";
+"10.53";

/** * 산술 연산자를 이용하는 방법 */

true * 1;
false * 1;
