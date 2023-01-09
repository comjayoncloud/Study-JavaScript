/** object , function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함께 호출 했을때와 동일하게 동작 */

let obj = new Object();
console.log(obj);

obj = Object();
console.log(obj);

let f = new Function("x", "return x ** x");
console.log(f);

f = Function("x", "return x**x");
console.log(f);
