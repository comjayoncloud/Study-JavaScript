var value = 1;

const obj = {
  value: 100,
  foo() {
    //this 바인딩을 변수 that에 할당.
    const that = this;
    setTimeout(function () {
      // 콜백 함수 내부ㅐ에서 this 대신 that을 참조.
      console.log("callbak's this.value:", that.value); // 100
    }, 100);
  },
};

obj.foo();
