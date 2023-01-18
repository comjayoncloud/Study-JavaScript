function Person() {
  this.name = name;
  let _age = age;
}

Person.prototype.sayHi = function () {
  console.log(`hi my name is ${this.name} i am ${_age}`);
};

console.log(Person);
