/** 프로퍼티를 동적 추가할 때는 ES6 메서드 정의를 사용할 수 없으므로 일반 함수를 할당한다. */

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`hi ${this.name}`);
};

const person = new Person("jeong");
person.sayHi();
