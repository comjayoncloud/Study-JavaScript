function Person(name, age) {
  this.name = name; // public
  let _age = age; // private

  this.sayHi = function () {
    console.log(`hi my name is ${this.name}. i am ${_age}`);
  };
}

const me = new Person("jeong", "25");

me.sayHi();
console.log(me.name);
console.log(me._age);
