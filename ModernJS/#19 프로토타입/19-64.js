/** 프로퍼티 열거 방법 1. for ... in 문 */

const person = { name: "jeong" };

for (const key in person) {
  console.log(key + ":" + person[key]);
}
