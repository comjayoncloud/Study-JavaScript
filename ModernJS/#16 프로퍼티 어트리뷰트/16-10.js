/** 객체 확장 금지 . Object.preventExtensions */

const person = {
  name: "jeong",
};

// 객체 확장 가능한지 확인
console.log(Object.isExtensible(person));

/**  객체 확장 금지 선언 및 확인 */
Object.preventExtensions(person);
console.log(Object.isExtensible(person));

//그냥 무시함.에러안뜸
person.age = 20;
console.log(person);

// 추가는 금지 지만 삭제는 됨!!
delete person.name;
console.log(person);

// 에러!
Object.defineProperty(person, "age", { value: 20 });
