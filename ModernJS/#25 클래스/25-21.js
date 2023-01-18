/** 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다 */

class Person {
  constructor(name) {
    this.name = name;
    return 100;
  }
}

const me = new Person("jeong");
console.log(me);
