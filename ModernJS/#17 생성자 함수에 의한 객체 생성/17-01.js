/** 빈객체 생성 */
const person = new Object();

/** 프로퍼티 추가 */
person.name = "jeong";
person.sayHello = function () {
  console.log("Hi my name is " + this.name);
};

console.log(person);
person.sayHello();
