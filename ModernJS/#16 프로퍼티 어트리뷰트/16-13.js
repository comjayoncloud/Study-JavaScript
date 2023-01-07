/** 불변 객체 */

const person = {
  name: "jeong",
  address: { city: "seoul" },
};

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결한다
console.log(Object.isFrozen(person));

// 중첩 객체까지는 못함
console.log(Object.isFrozen(person.address));

person.address.city = " incheon";

console.log(person.address);
