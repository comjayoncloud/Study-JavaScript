function Person(name) {
  this.name = name;
}

const me = new Person("jeong");

// Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true
console.log(me instanceof Person);

// Object.prototypee이 me 객체의 프로토타입 체인 상에 존재하므로 true
console.log(me instanceof Object);
