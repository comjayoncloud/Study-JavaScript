/**
 * bind 메서드는 메서드의 this와 메서드 내부의 중첩함수
 * 또는 콜백함수의 this가 불일치 하는 문제를 해결하기 위해 유용하게 사용된다.
 */

const person = {
  name: "jeong",
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달.
    setTimeout(callback.bind(this), 100);
  },
};

person.foo(function () {
  console.log(`Hi myname is ${this.name}`); // window.name이 아닌 바인딩 받은 this
});
