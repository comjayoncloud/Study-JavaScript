/** 적절한 인수가 전달 되었는지 확인할 필요가 있다. arguements 객체를 통해 인수 개수 확인할 수 있음*/

function add(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;
  return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());
