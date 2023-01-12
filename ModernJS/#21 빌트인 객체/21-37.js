/** 암묵적 전역 */
var x = 10;
function foo() {
  y = 20; //window.y = 20;
}

foo();
console.log(x + y);
