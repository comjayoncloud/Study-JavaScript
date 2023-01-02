/** 프로퍼티 접근시 에러 */

var person = {
  name: "lee",
};

console.log(person[name]); // 에러 뜸 왜냐 ? ""로 감싸야하지 않았기 때문에 js엔진은 식별자로 해석
