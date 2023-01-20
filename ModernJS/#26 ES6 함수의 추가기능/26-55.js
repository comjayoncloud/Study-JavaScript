function sum() {
  // 유사배열 객체인 arguments 객체를 배열로 반환
  var array = Array.prototype.slice.call(arguments);

  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));
