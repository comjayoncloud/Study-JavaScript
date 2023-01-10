/**
 * 2. Object 생성자 함수에 의한 객체생성
 * 인수가 전달되지 않았을때 추상 연산를 호출하여 빈객체를 생성
 */
let obj = new Object();
console.log(obj);

/** 1. new.target이 undefined나 Object가 아닌경우
 * 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성된다.
 */
class Foo extends Object {}
new Foo();

/** 3. 인수가 전달된 경우에는 인수를 객체로 변환한다.
 * Number 객체 생성
 */
obj = new Object(123);
console.log(obj);

obj = new Object("123");
console.log(obj);
