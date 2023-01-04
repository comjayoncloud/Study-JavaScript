/** var 문제점 3 : 변수 호이스팅 */
// 이시점에서 이미 foo 변수가 선언되었다. 1. 선언단계
// 변수 foo는 undefined로 됨 . 2. 초기화단계

console.log(foo); // undefined. 선언한게 없으니깐

foo = 123; // 3. 값 할당

console.log(foo); // 123

// 변수 선언은 런타임 이전에 js엔진에 의해 암묵적으로 실행된다.
var foo;
