const person = {
  name: "jeong",
};

/** 객체 동결 선언 및 확인 */
console.log(Object.isFrozen(person));
Object.freeze(person);
console.log(Object.isFrozen(person));

/** 읽기만 되지 나머지는 다안됨 */
console.log(Object.getOwnPropertyDescriptors(person));

/** 재정의만 error 뜨고 나머지는 에러없이 실행되지만 그냥 무시됨. */
person.age = 20;
delete person.name;
person.name = "kim";
console.log(person);

// 재정의만 error!
Object.defineProperties(person, "name", { configureable: true });
