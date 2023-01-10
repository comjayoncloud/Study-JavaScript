/** 유사배열 객체는 배열이 아님. 배열메서드 사용하려면 Function.prototype.call를사용 */

function sum() {
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));
