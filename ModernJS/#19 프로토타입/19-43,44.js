/** 인스턴스에 의한 프로토타입의 교체 */

function Person(name) {
  this.name = name;
}

const me = new Person("jeong");

/** 프로토타입으로 교체할 객체 */
const parent = {
  sayHello() {
    console.log(`hi my name is ${this.name}`);
  },
};

// 1. me 객체의 프로토 타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작한다
// me.__proto__ = parent;

me.sayHello();

console.log(me.constructor === Person);
console.log(me.constructor === Object);
