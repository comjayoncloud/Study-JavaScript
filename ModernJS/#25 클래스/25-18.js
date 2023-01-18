class Person {
  constructor() {
    // 고정값으로 인스턴스 초기화
    (this.name = "jeomg"), (this.address = "incheon");
  }
}

const me = new Person();
console.log(me);
