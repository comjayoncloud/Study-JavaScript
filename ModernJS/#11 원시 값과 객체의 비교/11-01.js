/** const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다 */
const o = {};

o.a = 1;
console.log(o);

o.a = 2;
console.log(o);
