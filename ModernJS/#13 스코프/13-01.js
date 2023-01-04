function add(x, y) {
  // 매개변수의 스코프는 함수 몸체 내부
  console.log(x, y);
  return x + y;
}

add(2, 5);
