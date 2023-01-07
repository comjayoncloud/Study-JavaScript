/** String 생성자 함수 */
const strObj = new String("jeong");
console.log(typeof strObj);
console.log(strObj);

/** Number 생성자 함수 */
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

/** Boolean 생성자 함수 */
const booObj = new Boolean(true);
console.log(typeof booObj);
console.log(booObj);

/** Function 생성자 함수 */
const funObj = new Function("x", "return x*x");
console.log(typeof funObj);
console.log(funObj);

/** Array 생성자 함수 */
const arrObj = new Array(1, 2, 3);
console.log(typeof arrObj);
console.log(arrObj);

/** RegExp 생성자 함수*/
const regObj = new RegExp(/ab+c/i);
console.log(typeof regObj);
console.log(regObj);

/** Date 생성자 함수*/
const date = new Date();
console.log(typeof date);
console.log(date);
