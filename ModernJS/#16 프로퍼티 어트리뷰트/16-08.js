/** 프로퍼티 정의 */
const person = {};

/** 데이터 프로퍼티 정의 */
Object.defineProperty(person, "firstName", {
  value: "Jaewoo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "jeong",
});

let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log(descriptor);

/**
 * Enumerable의 값이 false인 경우
 * lastName은 Enumerable이 false 이기에 열거 되지않음
 */
console.log(Object.keys(person));

/**
 * writeAble이 false인 경우 value 값 변경 불가.
 * 에러는 뜨지않고 그냥 무시됨
 */
person.lastName = " lee";
console.log(person.lastName);

/**
 * configurable 값이 false인 경우 프로퍼티 삭제 불가.
 * 에러는 뜨지않고 그냥 무시됨
 */

delete person.lastName;
console.log(person.lastName);

/**
 * configureable 값이 false인 경우 해당 프로퍼티 재정의 할수 없음
 */

descriptor = Object.getOwnPropertyDescriptor(person, "lastName");
console.log("lastName", descriptor);

////////////////////////////////////////////////////////////////////////////////////////////////

/** 접근자 프로퍼티 정의 */

Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);

person.fullName = "heegun lee";
console.log(person.lastName);
