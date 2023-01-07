/** 깊은 객체 동결 */

function deepFrozen(target) {
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);

    Object.keys(target).forEach((key) => deepFrozen(target[key]));
  }
  return target;
}

const person = {
  name: "jaewoo",
  address: { city: "incheon" },
};

//깊은 객체 동결
deepFrozen(person);

console.log(Object.isFrozen(person));
console.log(Object.isFrozen(person.address));

// 에러없이 무시됨
person.address.city = "seoul";
console.log(person);
