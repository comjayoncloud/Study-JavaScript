/**
 * 리터럴 표기법에 의해 생성된 객체도 물론 프로토타입이 존재한다.
 * 하지만 이경우 constrcutor 프로퍼티가 가리키는 생성자 함수가 반드시 객체를 생성한 생성자 함수라고 단정할 수는 없다. */

const obj = { name: "jeong" };

console.log(obj.constructor === Object);
console.log(obj.constructor === Function);
