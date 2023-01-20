class Person {
  // 클래스 필드 정의
  name = "lee";
  sayHi() {
    console.log(`hi ${this.name}`);
  }
}

const person = new Person();
person.sayHi();
