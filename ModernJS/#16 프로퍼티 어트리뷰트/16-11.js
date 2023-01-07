const person = {
  name: "jeong",
};

/** 밀봉됬는지 확인 */
console.log(Object.isSealed(person));

/** 밀봉 선언 및 확인! */
Object.seal(person);
console.log(Object.isSealed(person));

console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가 금지 , 에러안뜨고 그냥 무시됨
person.age = 20;
console.log(person);

// 프로퍼티 삭제 금지! extensions랑 차이점. 에러 안뜨고 그냥 무시됨
delete person.name;
console.log(person);

// 갱신은 가능!!
person.name = " kim";
console.log(person);

// 재정의 금지 -> 에러
Object.defineProperty(person, "name", { configurable: true });
