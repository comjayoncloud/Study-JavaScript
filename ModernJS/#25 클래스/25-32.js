class Person {
  // 생성자
  constructor(name) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
    console.log(this);
    console.log(Object.getPrototypeOf(this) === Person.prototype);

    // 2. this에 바인딩 되어있는 인스턴스를 초기화 한다.
    this.name = name;

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
}
