/** 옵셔널 체이닝 연산자 ?. */

var elem = null; // falsy

// elem이 Falsy 값이면 elem 으로 평가되고, elem이 Truthy 값이면 elem.value로 평가된다
var value = elem && elem.value;
console.log(value); // null
