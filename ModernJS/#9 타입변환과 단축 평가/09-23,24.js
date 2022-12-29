/** 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할때 타입에러가 발생 */

var elem = null;
var value = elem.value; // type error

/** 이때 단축 평가를 사용하면 에러를 발생하지않음 */
var elem = null;

// elem이 null 이나 undefined와 같은 Falsy 값이면 elem 으로 평가
// elem이 Truthy 값이면 elem.value로 평가
var value = elem && elem.value; // null
