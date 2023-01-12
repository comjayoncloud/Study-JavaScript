const Person = (function () {
  // 생성자
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hello my name is ${this.name}`);
  };

  return Person;
})();

/** 오버라이딩 */
const me = new Person("jeong");

me.sayHello = function () {
  console.log(`호호호 my name is ${this.name}`);
};

me.sayHello();

/** 오버라이딩된게 삭제되고 프로토타입은 건들지않음. */
delete me.sayHello;
me.sayHello();

/** 고로 프로토타입 메서드 변경 및 삭제 해야한다. */
Person.prototype.sayHello = function () {
  console.log(`everything is changed + ${this.name}`);
};
me.sayHello();

delete Person.prototype.sayHello;
me.sayHello(); // error 뜬다 왜냐면 sayHell()가 삭제되어 아무것도 없기 때문.
