/** let 장점3 변수 호이스팅 */

// 런타임 이전에 선언단계가 실행된다. 아직 변수 초기화 되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다

// console.log(foo); // error

let foo; // 변수 선언문에서 초기화 단계 실행
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계 실행
console.log(foo);
