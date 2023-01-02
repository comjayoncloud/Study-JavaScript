/** 프로퍼티 값 삭제 */

var person = {
  name: "lee",
  age: 10,
};

delete person.age;

// 존재하지 않는 프로퍼티 삭제.
// 에러 발생하지 않음
delete person.address;
console.log(person);
