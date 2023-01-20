/** arguments 객체를 배열로 변환하는 번거러움을 피할 수 있는 Rest 파라미터 */

function sum(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));
