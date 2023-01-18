const Person = class MyClass {};

const me = new Person();

/** MyClass는 함수와 동일하게 클래스 몸체 내부에서만 유효한 식별자. */
console.log(MyClass);
const you = new MyClass();
// console.log(Person);
// const you = new Person();
// console.log(you);
