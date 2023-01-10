/** 화살표 함수는 non-constructor */
const Person = (name) => {
  this.name = name;
};

/** non-constructor는 prototype 프로퍼티를 소유하지 않는다. */
console.log(Person.hasOwnProperty("prototype"));

/** non-constructor는 프로토타입을 생성하지 않음 */
console.log(Person.prototype);

/** ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor */
const obj = {
  foo() {},
};

console.log(obj.foo.hasOwnProperty("prototype"));
console.log(obj.foo.prototype);
