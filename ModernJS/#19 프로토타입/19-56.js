function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`hi my name is ${this.name}`);
};

// 정적 프로퍼티
Person.staticProp = "static prop";

Person.staticMethod = function () {
  console.log("staticMethod");
};

const me = new Person("jeong");

// 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출한다
Person.staticMethod();

// 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없다.
// 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야한다.
me.staticMethod();
