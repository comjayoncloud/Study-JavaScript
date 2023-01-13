/** 기본적으로 this에는 전역객체가 바인딩 된다. */
function foo() {
  console.log("foo's this : ", this); // window
  function bar() {
    console.log("bar'sthis : ", this); // window
  }
  bar();
}

foo();
