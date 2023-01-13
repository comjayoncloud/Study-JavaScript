var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo this :", this);
    // 콜백함수 내부의 this에는 전역 객체가 바인딩 된다.
    setTimeout(function () {
      //   console.log("callbak's this:", this); // window
      console.log("callbak's this.value:", this.value); // 1이어야 되는데 왜 .. undefined?
    }, 100);
  },
};

obj.foo();
