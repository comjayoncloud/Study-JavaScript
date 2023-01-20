/** Rest 파라미터 기본 문법 */

function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3, 4, 5);

function foo1(param, ...rest) {
  console.log(param);
  console.log(rest);
}

foo1(1, 2, 3, 4, 5);
