/**
 * 함수 선언문은 표현식이 아닌 문이므로 변수에 할당할 수 없다.
 * 하지만 함수 선언문이 아닌 변수에 할당되는것 처럼 보인다.
 */

var add = function add(x, y) {
  return x + y;
};

console.log(add(2, 5));

console.log(typeof add);
