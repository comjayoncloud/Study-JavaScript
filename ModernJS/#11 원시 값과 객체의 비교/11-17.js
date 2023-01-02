var person = {
  name: "jeong",
};

// 참조값을 복사(얕은복사)
var copy = person;

console.log(copy === person);

copy.name = " kim";

person.address = "incheon";

console.log(person);
console.log(copy);
