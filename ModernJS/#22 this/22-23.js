/**
 * bind 메서드는 메서드의 this와 메서드 내부의 중첩함수
 * 또는 콜백함수의 this가 불일치 하는 문제를 해결하기 위해 유용하게 사용된다.
 */

const person = {
  name: "jeong",
  foo(callback) {
    // 1 이시점에선 person을 가리킴.
    setTimeout(callback, 100);
  },
};

person.foo(function () {
  console.log(`Hi myname is ${this.name}`); // 2 이시점에서 this는 window.name임
});
