function outer() {
  var x = 1;

  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y);
  }

  inner();
}

outer();
