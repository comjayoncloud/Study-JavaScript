const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: "jaewoo",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "jeong",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true,
  },
});

person.fullName = "heegun lee";
console.log(person);
