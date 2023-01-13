// var 전역변수 value는 전역 객체의 프로퍼티
var value = 1;

// const 전역변수 value는 전역 객체의 프로퍼티가 아님
// const value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this); // value:100 , foo:f
    console.log("foo's this.value: ", this.value); // 100

    function bar() {
      console.log("bar's this :", this); // window
      console.log("bar's this.value :", this.value); // 1 전역객체이므로
    }
    // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this는
    // 전역 객체가 바인딩된다 .그래서 bar.value가 1임
    bar();
  },
};

obj.foo();
