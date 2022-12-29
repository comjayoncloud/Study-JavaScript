/** 옵셔널 체이닝 연산자 ?. */

var elem = null;

// elem이 null 또는 undefined면 undefined를 반환하고 , 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined
