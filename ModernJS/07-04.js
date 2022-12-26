/** 단항 산술 연산자 */

var x = 5,
  result;

result = x++;
console.log(result, x); // 5 6

result = ++x;
console.log(result, x); // 7 7

result = x--;
console.log(result, x); // 7 6

result = --x;
console.log(result, x); // 5 5
