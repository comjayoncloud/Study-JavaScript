var str = "";

// 문자열의 길이 length를 참조한다. 이때 좌항 피연산자가 false로 평가되도 null 또는 undefined가 아니면
// 우항 프로퍼티 참조를 이어간다.
var length = str?.length;

console.log(length);
