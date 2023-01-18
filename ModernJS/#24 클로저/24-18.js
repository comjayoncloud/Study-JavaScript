const Person = (function () {
  let _age = 0;

  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`my my name is ${this.name}. i am ${_age}`);
  };

  return Person;
})();

const me = new Person("jeong", "29");

me.sayHi();
console.log(me.name);
console.log(me._age);
