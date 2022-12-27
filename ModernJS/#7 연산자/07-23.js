/** 삼항 조건 연산자 표현식은 값처럼 사용할 수 있지만 if ..else 문은 값처럼 사용할 수 없다. */
var x = 10;

// if ..else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다.
var result = if(x%2){result='홀수';}else {result='짝수';}; // error
