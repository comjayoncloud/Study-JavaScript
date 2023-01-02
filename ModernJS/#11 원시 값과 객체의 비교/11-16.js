var person = {
  name: "lee",
};

// 참조값을 복사.(얕은 복사)
var copy = person;

console.log(copy);

console.log(copy === person);
console.log(copy.name === person.name);
