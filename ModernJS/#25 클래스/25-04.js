/** 클래스 선언문 */
class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHi() {
    console.log(`hi my name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log("hello");
  }
}

const me = new Person("Jeong");

console.log(me.name);
me.sayHi();

Person.sayHello();
