/** 인스턴스에 의한 프로토타입의 교체 */

function Person(name) {
  this.name = name;
}

const me = new Person("jeong");

/** 프로토타입으로 교체할 객체 */
const parent = {
  //constructor 프로퍼티와 생성자 함수 간의 연결 설정
  constructor: Person,
  sayHello() {
    console.log(`hi my name is ${this.name}`);
  },
};

// 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

// 1. me 객체의 프로토 타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다
// me.__proto__ = parent;

me.sayHello();

console.log(me.constructor === Person);
console.log(me.constructor === Object);

console.log(Person.prototype === Object.getPrototypeOf(me));
