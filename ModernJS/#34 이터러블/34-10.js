/**
 * 유사 배열 객체는 이터러블이 아닌 일반 객체다.
 * Symbol.iterator 메서드가 없기 때문에 for … of 문으로 순회할 수 없다.
 */
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

for (const item of arrayLike) {
  console.log(item);
}
