const person = {
  firstName: "jaewoo",
  lastNmae: "jeong",

  get fullName() {
    return `${this.firstName} ${this.lastNmae}`;
  },

  set fullName(name) {
    [this.firstName, this.lastNmae] = name.split(" ");
  },
};

/** 데이터 프로퍼티를 통한 프로퍼티 값 참조 */
console.log(person.firstName + " " + person.lastNmae);

/**
 *  접근자 프로퍼티를 통한 프로퍼티 값 저장
 * 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다
 */
person.fullName = "jay jeong2";
console.log(person);

/**
 * 접근자 프로퍼티를 통한 프로퍼티 값 참조
 * 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
 */
console.log(person.fullName);

/**
 * firstName은 데이터 프로퍼티
 * 프로퍼티 어트리 뷰트 갖음 . 4가지 . value,writeable,enumerable,configurable
 */
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);

/**
 * fullName은 접근자 프로퍼티
 * 프로퍼티 어트리뷰트를 갖음 .4가지 get,set,eunmerable,configurable
 */
descriptor = Object.getOwnPropertyDescriptor(person, "fullName");
console.log(descriptor);
