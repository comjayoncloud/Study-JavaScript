/** 함수는 객체 */
function foo() {}

foo.prop = 10;

foo.method = function () {
  console.log(this.prop);
};

foo.method();
