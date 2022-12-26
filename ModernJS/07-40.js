var x;

/** 할당연산자. 부수효과 있음 */
x = 1;
console.log(x);

/** ++와 -- 연산자. 부수효과 있음 */
x++;
console.log(x);

var o = { a: 1 };
delete o.a;
console.log(o);
