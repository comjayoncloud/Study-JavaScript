/** 프로퍼티 존재 확인 1 . in 연산자 */

const person = {
  name: "jeong",
  address: "incheon",
};

console.log("name" in person);
console.log("address" in person);
console.log("age" in person);
console.log(toString in person);
