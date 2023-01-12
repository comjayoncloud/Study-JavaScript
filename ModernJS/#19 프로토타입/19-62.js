/** 프로퍼티 존재 확인 2. Object.prototype.hasOwnProperty 메서드 */

const person = { name: "jeong" };

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("toString")); // false. in연산자와 달리 상속받은 곳까지 확인안함.
