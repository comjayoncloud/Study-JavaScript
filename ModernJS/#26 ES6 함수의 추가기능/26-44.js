class Person {
  name = "jeong";
  sayHi = () => console.log(`hi ${this.name}`);
}

const person = new Person("jeong");

person.sayHi();
