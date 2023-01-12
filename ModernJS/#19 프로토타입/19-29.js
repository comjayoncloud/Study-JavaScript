// 생성자 함수
function Person(name) {
  this.name = name;
}
ㅓ,
++
/** 프로토타입 메서드 */
Person.prototype.sayHello = function () {
  console.log(`Hi myname is ${this.name}`);
};

const me = new Person("jeong");

/** hasOwnproperty는 Object.prototyppe의 메서드다 */
console.log(me.hasOwnProperty("name"));

Object.getPrototypeOf(me) === Person.prototype