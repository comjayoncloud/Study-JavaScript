/** 프로토타입의 constructor 프로퍼티와 생성자 함수 */

/** 생성자함수 */
function Person(name) {
  this.name = name;
}

const me = new Person("jeong");

// me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person);
