/** non-constructor는 프로토타입이 생성되지 않는다. */

const Person = (name) => {
  this.name = name;
};

console.log(Person.prototype); // undefined.
