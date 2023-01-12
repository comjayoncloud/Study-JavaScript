/** 프로퍼티 존재 확인 1. ES6에서 도입된 Reflect.has 메서드 . in연산자와 동일 */
const person = { name: "jeong" };
console.log(Reflect.has(person, "name"));
console.log(Reflect.has(person, "toString"));
