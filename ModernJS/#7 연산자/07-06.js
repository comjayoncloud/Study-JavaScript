var x = "1";
console.log(typeof x);

/** 문자열을 숫자로 타입 변환  */
console.log(+x);
console.log(typeof x);

/** 불리언 값을 숫자로 타입으로 변환 */
x = true;
console.log(+x);
console.log(x);
console.log(typeof x);

/** 문자열을 숫자로 타입 변환할 수 없으므로 NaN 반환 */
x = "hello";
console.log(+x);
console.log(x);
