var person = {
  "last-name": "lee",
  1: 10,
};

// console.log(person.'last-name'); // unexpected string
// person.last-name; // name is not defined. js엔진은 식별자로 간주
// person[last-name]; // name is not defined .js엔진은 식별자로 간주
// person['last-name'] // 성공

// console.log(person.1);
// console.log(person.'1');
console.log(person[1]);
console.log(person["1"]);
